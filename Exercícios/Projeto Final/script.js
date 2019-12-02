document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var elems = document.querySelectorAll('.carousel');
    var options = { dist: 0, padding: 140, numVisible: 3, duration: 100 };
    var instances = M.Carousel.init(elems, options);
});