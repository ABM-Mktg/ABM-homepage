(function () {
  var TALLY_FORM_ID = "FORM_ID_CONTACT_US";
  var TALLY_SRC =
    "https://tally.so/r/" +
    TALLY_FORM_ID +
    "?source=Website_Contact&alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

  function ensureModal() {
    if (document.getElementById("cMod")) return;

    var wrapper = document.createElement("div");
    wrapper.innerHTML =
      '<div class="cm" id="cMod">' +
      '  <div class="contact-card">' +
      '    <div class="contact-header">' +
      '      <div class="contact-brand">' +
      '        <img src="/assets/SIT v2 light/headerlogo.png" alt="SIT Strategic Industry Territory" />' +
      "      </div>" +
      "      <h3>Contact Us</h3>" +
      '      <button class="contact-close" type="button" aria-label="Close contact modal">✕</button>' +
      "    </div>" +
      '    <div class="contact-body">' +
      '      <div class="contact-form">' +
      "        <!-- Tally Form 4 (Contact Us): replace FORM_ID_CONTACT_US in assets/contact-modal.js with the real /r/... id from Tally -> Share -> Embed. -->" +
      '        <div class="private-tally-wrap">' +
      '          <iframe data-tally-src="' +
      TALLY_SRC +
      '" loading="lazy" width="100%" height="500" frameborder="0" title="Contact us"></iframe>' +
      "        </div>" +
      "      </div>" +
      '      <div class="contact-photo">' +
      '        <img src="/assets/img/Contact Us.jpg" alt="SIT field representative" />' +
      "      </div>" +
      "    </div>" +
      "  </div>" +
      "</div>";

    document.body.appendChild(wrapper.firstChild);
  }

  function closeContactModal() {
    var modal = document.getElementById("cMod");
    if (!modal) return;
    modal.classList.remove("on");
    document.body.style.overflow = "";
  }

  function openContactModal() {
    ensureModal();
    var modal = document.getElementById("cMod");
    if (!modal) return;
    modal.classList.add("on");
    document.body.style.overflow = "hidden";
  }

  document.addEventListener("DOMContentLoaded", function () {
    ensureModal();

    document.addEventListener(
      "click",
      function (e) {
        var trigger = e.target.closest("a[data-tally-placeholder]");
        if (trigger) {
          e.preventDefault();
          if (typeof cM === "function") cM();
          openContactModal();
          return;
        }

        if (e.target.closest(".contact-close")) {
          closeContactModal();
          return;
        }

        var modal = document.getElementById("cMod");
        if (modal && e.target === modal) closeContactModal();
      },
      true,
    );

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeContactModal();
    });
  });
})();
