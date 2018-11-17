window.addEventListener ( "load", function ( ev ) {
//    获取轮播图高度
    var slideHeight = document.getElementById ( "slide" ).offsetHeight
    console.log ( slideHeight )
//    获取顶部元素
    var header = document.getElementById ( "header" )
//    给页面添加监听滚动条事件
    window.addEventListener ( "scroll", setOpacity )

    function setOpacity () {
        //    获取滚动条距离
        var getScroll = document.body.scrollTop || document.documentElement.scrollTop
        //    计算透明值
        var opaction = getScroll / slideHeight

        if ( opaction < 1 ) {
            // 7. 设置头部的透明度值为当前计算的透明度值
            header.style.backgroundColor = "rgba(222, 24, 27, " + opaction + ")"
        } else {
            // 8. 如果透明度值超过了1 默认设置为1
            header.style.backgroundColor = "rgba(222, 24, 27,1)"
        }
    }

//       轮播图初始化代码
    var mySwiper = new Swiper ( ".swiper-container", {
        // direction: 'vertical', // 垂直切换选项,默认水平
        autoplay : {
            delay : 2000, stopOnLastSlide : false, disableOnInteraction : true
        }, loop : true, // 循环模式选项

        // 如果需要分页器
        pagination : {
            el : ".swiper-pagination"
        }, effect : "cube" // cubeEffect: {
        //     slideShadows: true,
        //     shadow: true,
        //     shadowOffset: 100,
        //     shadowScale: 0.6
        // },

        // 如果需要前进后退按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    } )
//倒计时模块代码
    // 获取未来时间 使用new Date函数 传递参数   年 月 日 时 分 秒   每个都是数字用逗号隔开 但是注意月份是0-11
    // getTime 函数是把时间转成毫秒数 从1970-1-1-0:00:00 - 2018,11-14-16:00:00
    var futureTime = new Date ( 2018, 10, 15, 15, 00, 00 ).getTime ()
    // console.log(futureTime);
    // 获取当前时间 使用new Date不传参表示当前时间
    var nowTime = new Date ().getTime ()
    // console.log(nowTime);
    // 求当前的总时间 =  未来时间 - 当前时间
    // 但是这是一个毫秒数 我们倒计时需要的是秒数还要 / 1000 转成秒
    // console.log(futureTime-nowTime);
    var time = Math.floor ( ( futureTime - nowTime ) / 1000 )
    // 获取页面显示时分秒的所有span元素 所有元素带All
    var spans = document.querySelectorAll ( ".seckill-time span" )
    // 定义定时器 让总时间 每隔1秒--
    setInterval ( function () {
        //每隔1秒--
        time --
        if ( time <= 0 ) {
            time = 7200
        }
        // 求当前总时间的小时数  =  总时间 / 3600  因为1个小时是3600  2 小时 7200    7200/3600
        var hour = Math.floor ( time / 3600 )
        // console.log(hour);
        // 求分钟 使用总时间 / 60 因为1分钟60秒 但是时间可能超过1小时 把小时部分取模去掉 3660 / 60 = 61  % 60  == 1
        var minute = Math.floor ( time / 60 % 60 )
        // console.log(minute);
        // 求秒 总时间 % 60  70 % 60  = 10   130 % 60 = 10
        var second = Math.floor ( time % 60 )
        // console.log(second);
        //把小时的十位和个位显示到页面上  十位  小时 / 10   12 / 10 = 1    个位 小时 % 10  = 2
        spans[ 0 ].innerHTML = Math.floor ( hour / 10 )
        spans[ 1 ].innerHTML = Math.floor ( hour % 10 )
        spans[ 3 ].innerHTML = Math.floor ( minute / 10 )
        spans[ 4 ].innerHTML = Math.floor ( minute % 10 )
        spans[ 6 ].innerHTML = Math.floor ( second / 10 )
        spans[ 7 ].innerHTML = Math.floor ( second % 10 )
    }, 1000 )



})