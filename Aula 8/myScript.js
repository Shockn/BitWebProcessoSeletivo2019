document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var elems = document.querySelectorAll('.carousel');
    var options = { dist: 0, padding: 20, numVisible: 6 };
    var instances = M.Carousel.init(elems, options);
  });