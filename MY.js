  // 动画的封装函数
  function donghua(obj, width, huidiao) { // 这是一个封装函数   第三个参数为回调函数
    clearInterval(obj.ting)
    obj.ting = setInterval(function () {
        var huang = (width - obj.offsetLeft) / 10 // 缓冲动画
        var huang = huang > 0 ? Math.ceil(huang) : Math.floor(huang); // 判断是正数还是负数 
        if (obj.offsetLeft == width) {
            clearTimeout(obj.ting)
            // ***  重点  回调函数 一点要写这个 不然执行不了
            if (huidiao) { // 之所以写在这里  是应该等动画结束之后 如果有个参数就调用  如果没有就不掉用
                huidiao()
            }
        };
        obj.style.left = obj.offsetLeft + huang + "px"
    }, 15)
};