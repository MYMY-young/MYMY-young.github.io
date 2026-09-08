(function () {
  var toggle = document.getElementById("topnav-toggle");
  var links = document.getElementById("topnav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    var isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  var navLinks = links.querySelectorAll("a");

  navLinks.forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Highlight the nav link matching the section currently in view.
  if ("IntersectionObserver" in window) {
    var sectionToLink = {};
    navLinks.forEach(function (a) {
      var id = a.getAttribute("href");
      if (id && id.charAt(0) === "#" && id.length > 1) {
        var section = document.getElementById(id.slice(1));
        if (section) sectionToLink[id.slice(1)] = a;
      }
    });

    var sections = Object.keys(sectionToLink)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    if (sections.length) {
      var setActive = function (id) {
        navLinks.forEach(function (a) { a.classList.remove("active"); });
        var link = sectionToLink[id];
        if (link) link.classList.add("active");
      };

      var observer = new IntersectionObserver(
        function (entries) {
          var visible = entries
            .filter(function (e) { return e.isIntersecting; })
            .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
          if (visible.length) setActive(visible[0].target.id);
        },
        { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
      );

      sections.forEach(function (section) { observer.observe(section); });
    }
  }
})();
