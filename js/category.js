/*
** Create by Administrator on 2018-11-14
*/
window.addEventListener ( "load", function () {
    //初始化swapper插件
    var swiper = new Swiper ( ".swiper-container", {
        direction : "vertical", slidesPerView : "auto", freeMode : true, scrollbar : {
            el : ".swiper-scrollbar"
        }, mousewheel : true
    } )
    //左列栏点击吸顶切换类效果
    /*实现分类左侧点击功能： 点击当前的菜单要位移到 当前菜单吸顶的位置
    1. 默认插件使用translate3d设置的位移
    2. 要位移多少距离 =  当前点击的li的下标 * li的高度
    3. 设置当前swiper-wrapper 元素的位移属性上
    实现思路
    1. 给所有li添加点击事件 拿到当前点击li的索引
    2. 拿到当前li的高度
    3. 计算位移距离 =  li的索引+li的高度
    4. 获取当前swiper-wrapper元素设置位移
    5. 判断当前位移的距离是否超过了最小位移的距离(往上位移负值) 如果超过了就 设置为最小位移的距离
    6. 如果需要过渡在给swiper-wrapper添加一个过渡效果
    7. 获取所有li删除active类名
    8.*/
    var lis = document.querySelectorAll ( ".cate-left ul li" )
    // console.log ( lis )
//    遍历lis,添加点击事件
    for ( var i = 0 ; i < lis.length ; i ++ ) {
        //添加索引
        lis[ i ].index = i
        lis[ i ].addEventListener ( "click", function () {
            // console.log ( this );
            //    拿到li的高度
            var liHight = this.offsetHeight
            // 3. 计算位移距离 =  li的索引+li的高度
            var translateY = - ( this.index * liHight )
            console.log ( translateY )
            //  计算最小位移的值  父元素category-left的高度  - 子元素ul的高度
            var minHeight = document.querySelector ( ".cate-left " ).offsetHeight - this.parentNode.offsetHeight;
            if (translateY < minHeight){
                translateY = minHeight
            }
            console.log ( minHeight )
            // 4. 获取当前swiper-wrapper元素设置位移
            document.querySelector ( ".cate-left .swiper-wrapper" ).style.transform = "translate3d(0px," + translateY + "px,0px)"
            document.querySelector ( ".cate-left .swiper-wrapper" ).style.transition ="all 0.5s"
            //切换类
            for(var i = 0;i<lis.length;i++){
            lis[i].classList.remove('active')
            }
            this.classList.add('active')
        } )
    }

} )