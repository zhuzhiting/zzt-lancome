/* 回到顶部 */
/* function goToTop(dom) {
    this.container = dom; // 按钮元素
    this.timer = null; //定时器

    // 默认执行
    this.init = function () {
        this.container.onclick = function (ev) {
            this.timer = setInterval((_) => {
                let topNum = document.documentElement.scrollTop;
                // 为0时进入清除定时器
                if (topNum === 0) {
                    clearInterval(this.timer);
                } else {
                    document.documentElement.scrollTop -= 300;
                }
            }, 20);
        };
    };
}
// 传入dom
var goTopFunc = new goToTop(document.getElementsByClassName("e-back-top")[0]);
goTopFunc.init(); // 调用执行 */

var timer = null;
document.getElementsByClassName("e-back-top")[0].onclick = function (ev) {
    timer = setInterval((_) => {
        // 滚动距离 === 0 时进入清除定时器
        if (document.documentElement.scrollTop === 0)
            clearInterval(timer);
        else
            document.documentElement.scrollTop -= 300;
    }, 30);
};
/* 监听滚动条回到顶部隐藏按钮 */
window.onscroll = function () {
    var sTop = document.documentElement.scrollTop || document.body.scrollTop;
    var box = document.getElementsByClassName("back-top")[0];
    if (sTop > 600) {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
};

/* 轮播图 */
const mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',

    },
    
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
