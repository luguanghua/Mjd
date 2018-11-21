window.mjd = {};

mjd.transitionend = function (obj,callback) {
    // 当过渡结束之后有一个事件
    obj.addEventListener('transitionend',callback);

    obj.addEventListener('webkitTransitionEnd',callback);

};

