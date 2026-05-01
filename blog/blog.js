(function () {
  var POSTS_PER_PAGE = 12;
  var currentPage = 1;

  function applySavedTheme() {
    var html = document.documentElement;
    var saved = localStorage.getItem("st");
    if (saved) {
      html.setAttribute("data-theme", saved);
    }
    var icon = document.getElementById("tI");
    if (icon) {
      icon.innerHTML = html.getAttribute("data-theme") === "dark" ? "&#9788;" : "&#9790;";
    }
  }

  window.toggleTheme = function toggleTheme() {
    var html = document.documentElement;
    var next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("st", next);
    var icon = document.getElementById("tI");
    if (icon) {
      icon.innerHTML = next === "dark" ? "&#9788;" : "&#9790;";
    }
  };

  window.toggleMobileMenu = function toggleMobileMenu() {
    var menu = document.getElementById("mM");
    if (menu) menu.classList.toggle("on");
  };

  window.closeMobileMenu = function closeMobileMenu() {
    var menu = document.getElementById("mM");
    if (menu) menu.classList.remove("on");
  };

  window.tT = window.toggleTheme;
  window.tM = window.toggleMobileMenu;
  window.cM = window.closeMobileMenu;

  function oC() {
    var el = document.getElementById("cMod");
    if (!el) return;
    el.classList.add("on");
    document.body.style.overflow = "hidden";
  }

  function cC() {
    var el = document.getElementById("cMod");
    if (!el) return;
    el.classList.remove("on");
    document.body.style.overflow = "";
  }

  window.cC = cC;

  var cModEl = document.getElementById("cMod");
  if (cModEl) {
    cModEl.addEventListener("click", function (e) {
      if (e.target === this) cC();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") cC();
  });
  document.addEventListener(
    "click",
    function (e) {
      var a = e.target.closest("a[data-tally-placeholder]");
      if (a) {
        e.preventDefault();
        window.closeMobileMenu();
        oC();
      }
    },
    true
  );

  function formatDate(dateString) {
    if (!dateString) return "";
    var date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }

  function getPostUrl(slug) {
    return "/blog/post.html?slug=" + encodeURIComponent(slug);
  }

  function getCategoryLabel(category) {
    if (!category) return "";
    if (typeof category === "string") return category;
    if (Array.isArray(category)) {
      return category
        .map(function (item) {
          if (typeof item === "string") return item;
          if (item && typeof item === "object" && item.name) return item.name;
          return String(item);
        })
        .join(", ");
    }
    if (typeof category === "object" && category.name) return category.name;
    return String(category);
  }

  function isPublishedForListing(post) {
    if (!post) return false;
    if (post.status !== "Published") return false;
    return true;
  }

  function normalizePost(post) {
    if (!post || typeof post !== "object") return null;
    if (!post.title) return null;
    return post;
  }

  async function loadApiPosts() {
    var endpoints = ["/.netlify/functions/blog-posts", "/api/blog-posts"];
    for (var i = 0; i < endpoints.length; i += 1) {
      try {
        var response = await fetch(endpoints[i], { cache: "no-store" });
        if (!response.ok) continue;
        var payload = await response.json();
        if (!Array.isArray(payload)) continue;
        var posts = payload
          .map(function (post) {
            return normalizePost(post);
          })
          .filter(Boolean);
        if (posts.length) return posts;
      } catch (error) {
        continue;
      }
    }
    return [];
  }

  async function loadManifestPostFiles() {
    try {
      var manifestResponse = await fetch("/content/blog/index.json", { cache: "no-store" });
      if (!manifestResponse.ok) return [];
      var manifest = await manifestResponse.json();
      if (!Array.isArray(manifest)) return [];
      return manifest
        .filter(function (fileName) {
          return typeof fileName === "string" && /\.json$/i.test(fileName);
        })
        .map(function (fileName) {
          return fileName.split("/").pop();
        });
    } catch (error) {
      return [];
    }
  }

  async function loadFolderPosts() {
    try {
      var fileNames = await loadManifestPostFiles();

      if (!fileNames.length) {
        var listingResponse = await fetch("/content/blog/", { cache: "no-store" });
        if (!listingResponse.ok) return [];
        var html = await listingResponse.text();
        var regex = /href\s*=\s*["']([^"']+\.json)["']/gi;
        var match;
        while ((match = regex.exec(html)) !== null) {
          if (match[1]) fileNames.push(match[1]);
        }

        if (!fileNames.length && typeof DOMParser !== "undefined") {
          var doc = new DOMParser().parseFromString(html, "text/html");
          var links = Array.prototype.slice.call(doc.querySelectorAll("a[href$='.json']"));
          fileNames = links.map(function (link) {
            return link.getAttribute("href");
          });
        }

        fileNames = fileNames
          .filter(Boolean)
          .map(function (fileName) {
            return String(fileName).split("/").pop();
          });
      }

      if (!fileNames.length) return [];

      var results = await Promise.all(
        fileNames.map(async function (fileName) {
          try {
            var postResponse = await fetch("/content/blog/" + fileName, { cache: "no-store" });
            if (!postResponse.ok) return null;
            var post = await postResponse.json();
            if (!post.slug) {
              post.slug = fileName.replace(/\.json$/, "");
            }
            return normalizePost(post);
          } catch (error) {
            return null;
          }
        })
      );
      return results.filter(Boolean);
    } catch (error) {
      return [];
    }
  }

  async function loadPosts() {
    var bySlug = {};
    var apiPosts = await loadApiPosts();
    var folderPosts = apiPosts.length ? apiPosts : await loadFolderPosts();

    folderPosts.forEach(function (post) {
      if (!post || !post.slug) return;
      bySlug[post.slug] = post;
    });

    var allPosts = Object.keys(bySlug).map(function (slug) {
      return bySlug[slug];
    });

    return allPosts.sort(function (a, b) {
      return new Date(b.date || 0) - new Date(a.date || 0);
    });
  }

  function renderPagination(totalPages, onPageChange) {
    var pagination = document.getElementById("blogPagination");
    if (!pagination) return;
    if (totalPages <= 1) {
      pagination.hidden = true;
      pagination.innerHTML = "";
      return;
    }

    pagination.hidden = false;
    pagination.innerHTML = "";

    for (var page = 1; page <= totalPages; page += 1) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "blog-page-btn" + (page === currentPage ? " is-active" : "");
      button.textContent = String(page);
      (function (targetPage) {
        button.addEventListener("click", function () {
          if (targetPage === currentPage) return;
          currentPage = targetPage;
          onPageChange();
        });
      })(page);
      pagination.appendChild(button);
    }
  }

  function renderList(posts) {
    var grid = document.getElementById("blogGrid");
    var emptyState = document.getElementById("emptyState");
    var pagination = document.getElementById("blogPagination");
    if (!grid) return;
    var visiblePosts = posts.filter(function (post) {
      return post && post.slug && post.title && isPublishedForListing(post);
    });

    if (!visiblePosts.length) {
      emptyState.hidden = false;
      if (pagination) pagination.hidden = true;
      grid.innerHTML = "";
      return;
    }

    emptyState.hidden = true;
    var totalPages = Math.ceil(visiblePosts.length / POSTS_PER_PAGE);
    if (currentPage > totalPages) currentPage = totalPages;
    var start = (currentPage - 1) * POSTS_PER_PAGE;
    var pageItems = visiblePosts.slice(start, start + POSTS_PER_PAGE);

    grid.innerHTML = pageItems
      .map(function (post) {
        var categoryLabel = getCategoryLabel(post.category);
        var imageHtml = post.image
          ? '<img class="blog-card-image" src="' + post.image + '" alt="' + post.title + '" />'
          : "";
        var postUrl = getPostUrl(post.slug);
        var categoryHtml = categoryLabel ? '<p class="blog-card-category">' + categoryLabel + "</p>" : "";
        return (
          '<a class="blog-card blog-card--link" href="' + postUrl + '">' +
          (imageHtml || '<img class="blog-card-image blog-card-image--placeholder" src="/assets/blog/no-image-placeholder.svg" alt="No featured image available" />') +
          categoryHtml +
          "<h2>" + post.title + "</h2>" +
          '<p class="blog-card-meta">' + formatDate(post.date) + "</p>" +
          '<p class="blog-card-excerpt">' + (post.excerpt || "") + "</p>" +
          '<span class="blog-card-link">Read More</span>' +
          "</a>"
        );
      })
      .join("");

    renderPagination(totalPages, function () {
      renderList(posts);
    });
  }

  function renderPost(posts) {
    var params = new URLSearchParams(window.location.search);
    var pathSlug = window.location.pathname.replace(/^\/blog\/?/, "").replace(/\/$/, "");
    var slug = params.get("slug") || (pathSlug && pathSlug !== "post.html" ? decodeURIComponent(pathSlug) : "");
    var post = posts.find(function (item) {
      return item.slug === slug;
    });

    var postTitle = document.getElementById("postTitle");
    var postMeta = document.getElementById("postMeta");
    var postCategory = document.getElementById("postCategory");
    var postExcerpt = document.getElementById("postExcerpt");
    var postImage = document.getElementById("postImage");
    var postContent = document.getElementById("postContent");
    var postError = document.getElementById("postError");

    if (!post) {
      if (postError) postError.hidden = false;
      if (postTitle) postTitle.textContent = "Post Not Found";
      return;
    }

    if (postError) postError.hidden = true;

    document.title = post.title + " | SIT Insights";

    if (postTitle) postTitle.textContent = post.title;
    if (postMeta) postMeta.textContent = (post.author ? post.author + " | " : "") + formatDate(post.date);
    if (postCategory) {
      var categoryLabel = getCategoryLabel(post.category);
      if (categoryLabel) {
        postCategory.textContent = categoryLabel;
        postCategory.hidden = false;
      }
    }
    if (postExcerpt) postExcerpt.textContent = post.excerpt || "";

    if (postImage && post.image) {
      postImage.src = post.image;
      postImage.alt = post.title;
      postImage.hidden = false;
    }

    if (postContent) {
      postContent.innerHTML = window.marked ? window.marked.parse(post.content || "") : (post.content || "");
    }
  }

  async function init() {
    applySavedTheme();
    if (document.body && document.getElementById("blogGrid")) {
      document.body.classList.add("blog-loading");
    }

    try {
      var posts = await loadPosts();
      if (document.getElementById("blogGrid")) {
        renderList(posts);
      }
      if (document.getElementById("postContent")) {
        renderPost(posts);
      }
    } catch (error) {
      var emptyState = document.getElementById("emptyState");
      if (emptyState) {
        emptyState.hidden = false;
        emptyState.textContent = "Could not load blog posts.";
      }
      var postError = document.getElementById("postError");
      if (postError) {
        postError.hidden = false;
        postError.textContent = "Could not load this post.";
      }
    } finally {
      if (document.body) {
        document.body.classList.remove("blog-loading");
      }
    }
  }

  init();
})();
