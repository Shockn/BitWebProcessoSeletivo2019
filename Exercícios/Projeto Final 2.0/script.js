document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit()
    var elems = document.querySelectorAll('.carousel');
    var elems2 = document.querySelectorAll('.sidenav');
    var options = { indicator: true, dist: 0, padding: 50, numVisible: 3, duration: 100};
    var options2 = { edge: 'right', draggable: true };
    var instances = M.Carousel.init(elems, options);
    var instances = M.Sidenav.init(elems2, options2)
});