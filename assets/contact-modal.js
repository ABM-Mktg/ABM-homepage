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
      "      <h3>Contact Us</h3>" +
      '      <button class="contact-close" type="button" aria-label="Close contact modal">✕</button>' +
      "    </div>" +
      '    <div class="contact-body">' +
      '      <div class="contact-form">' +
      '        <p class="contact-route-intro">Select the pathway that matches your request and continue to the dedicated inquiry page.</p>' +
      '        <div class="contact-route-list">' +
      '          <a class="contact-route-link" href="/apply">' +
      '            <span class="contact-route-title">GroundForce Territory Review</span>' +
      "          </a>" +
      '          <a class="contact-route-link" href="/pilot">' +
      '            <span class="contact-route-title">Visibility Pilot Inquiry</span>' +
      "          </a>" +
      '          <a class="contact-route-link" href="/engage-inquiry">' +
      '            <span class="contact-route-title">Engage Brand Activation</span>' +
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
