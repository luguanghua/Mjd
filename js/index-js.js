window.onload = function () {

    banner();

    var banner = document.querySelector('.banner');
    var header = document.querySelector('.header-in');
    var bannerH = banner.offsetHeight;
    window.onscroll = function () {

    };


    function banner() {


        var banner = document.querySelector('.banner');
        var oul = banner.children[0];
        var ol = banner.children[1];
        var list = ol.children;
        var currIndex = 1;
        var bannerW = banner.offsetWidth;

        function translateX(obj, x) {
            obj.style.transform = 'translateX('+ x +'px)';
            obj.style.webkitTransform = 'translateX(' + x + 'px)';
        }

        function removeTransition() {
            oul.style.transition = 'none';
            oul.style.webkitTransition = 'none';
        }

        function addTransition() {
            oul.style.transition = 'all 0.3s';
            oul.style.webkitTransition = 'all 0.3s';
        }


        function autoplay() {
            currIndex++;
            addTransition();
            translateX(oul, -bannerW * currIndex);
        }

        var timer = setInterval(autoplay, 1000);


        mjd.transitionend(oul, function () {
            if (currIndex >= 9) {
                currIndex = 1;
            } else if (currIndex <= 0) {
                currIndex = 8;
            }
            removeTransition();
            translateX(oul, -bannerW * currIndex);
            for (var i = 0; i < list.length; i++) {
                list[i].className = '';
            }
            list[currIndex - 1].className = 'current';
        });

        var startX = 0;
        var endX = 0;
        var distance = 0;

        oul.addEventListener("touchstart", function (e) {
            clearInterval(timer);
            startX = e.touches[0].clientX;
        });
        oul.addEventListener("touchmove", function (e) {
            endX = e.touches[0].clientX;
            distance = endX - startX;
            var currX = -bannerW * currIndex;
            var del = currX + distance;
            removeTransition();
            translateX(oul,del);
            e.preventDefault();
        });
        oul.addEventListener("touchend", function () {
            if (Math.abs(distance) >= bannerW/3){
                if (distance < 0 ){
                    currIndex++;
                } else {
                    currIndex--;
                }
            }
            addTransition();
            translateX(oul, -bannerW * currIndex);
             timer = setInterval(autoplay, 1000);
        })
    }




};