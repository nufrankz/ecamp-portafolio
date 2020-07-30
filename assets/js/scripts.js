$(document).ready(function () {
  $("a").on("click", function (e) {
    if (this.hash !== "" && this.hash !== "#carouselExampleCaptions") {
      e.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
