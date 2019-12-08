document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var elems = document.querySelectorAll('.carousel');
    var options = { indicator: true, dist: 0, padding: 50, numVisible: 3, duration: 100};
    var instances = M.Carousel.init(elems, options);
});