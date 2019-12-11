document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var options = { indicator: true, dist: 0, padding: 50, numVisible: 3, duration: 100};
    var instances = M.Carousel.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit()
    var elems = document.querySelectorAll('.sidenav');
    var options = { edge: 'right', draggable: true };
    var instances = M.Sidenav.init(elems, options);
});