/*
    封装一个移动函数
    第一个参数：需要移动的元素
    第二个参数：目标位置的水平坐标
    第三个参数：目标位置的垂直坐标
    第四个参数：计时器的时间间隔
*/
var animateMove = function(obj, x, y, interval) {
    // 0. 运行之前清除一次计时器
    clearInterval(obj.timeID);
    // 1. 创建一个计时器
    obj.timeID = setInterval(function() {
        // 2. 获取元素的 top 和 left 值
        var currentTop = obj.offsetTop;
        var currentLeft = obj.offsetLeft;

        // 3. 计算本次需要运动的距离
        // 3.1 水平方向
        if (currentLeft < x) {
            // 当前位置小于目标位置，向右移动
            var stepX = (x - currentLeft) / 10;
            // 将本次需要移动的距离向上取整
            stepX = Math.ceil(stepX);
            // 计算本次移动之后的新位置
            currentLeft += stepX;
        }
        if (currentLeft > x) {
            // 当前位置大于目标位置，向左移动
            var stepX = (currentLeft - x) / 10;
            // 将本次需要移动的距离向上取整
            stepX = Math.ceil(stepX);
            // 计算本次移动之后的新位置
            currentLeft -= stepX;
        }
        // 3.2 竖直方向
        if (currentTop < y) {
            // 当前位置小于目标位置，向下移动
            var stepY = (y - currentTop) / 10;
            // 将本次需要移动的距离向上取整
            stepY = Math.ceil(stepY);
            // 计算本次移动之后的新位置
            currentTop += stepY;
        }
        if (currentTop > y) {
            // 当前位置小于目标位置，向下移动
            var stepY = (currentTop - y) / 10;
            // 将本次需要移动的距离向上取整
            stepY = Math.ceil(stepY);
            // 计算本次移动之后的新位置
            currentTop -= stepY;
        }

        // 4. 移动元素
        obj.style.left = currentLeft + 'px';
        obj.style.top = currentTop + 'px';

        // 5. 到达目标
        if (currentLeft == x && currentTop == y) {
            clearInterval(obj.timeID);
        }
    }, interval);
}
