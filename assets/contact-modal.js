(function () {
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
      '      <button class="contact-close" type="button" aria-label="Close contact modal">✕</button>' +
      "    </div>" +
      '    <div class="contact-body">' +
      '      <div class="contact-form">' +
      '        <h3 class="contact-modal-headline">Let’s Get You Connected</h3>' +
      '        <p class="contact-route-intro">Choose the option that best fits your goals and continue to the appropriate inquiry.</p>' +
      '        <div class="contact-route-list">' +
      '          <a class="contact-route-link btn bp" href="/apply">' +
      '            <span class="contact-route-title">Explore Territory Availability</span>' +
      '            <svg width="10" height="10" viewBox="0 0 11 11" fill="none" aria-hidden="true">' +
      '              <path d="M.82 10.08L10.08.82M10.08.82H1.98M10.08.82V8.92" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />' +
      "            </svg>" +
      "          </a>" +
      '          <a class="contact-route-link btn bp" href="/pilot">' +
      '            <span class="contact-route-title">Start a Visibility Pilot</span>' +
      '            <svg width="10" height="10" viewBox="0 0 11 11" fill="none" aria-hidden="true">' +
      '              <path d="M.82 10.08L10.08.82M10.08.82H1.98M10.08.82V8.92" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />' +
      "            </svg>" +
      "          </a>" +
      '          <a class="contact-route-link btn bp" href="/engage-inquiry">' +
      '            <span class="contact-route-title">Activate Your Brand Presence</span>' +
      '            <svg width="10" height="10" viewBox="0 0 11 11" fill="none" aria-hidden="true">' +
      '              <path d="M.82 10.08L10.08.82M10.08.82H1.98M10.08.82V8.92" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />' +
      "            </svg>" +
      "          </a>" +
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
