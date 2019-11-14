/**
 * 匀速动画封装
 * @param: obj:元素
 * @param: target:目标位置
 */
function animateMove(obj, target) {
    // 0. 每次调用函数的时候，先清空可能存在的计时器
    clearInterval(obj.timeID);

    // 1. 创建一个计时器，其唯一标识符定义到元素的自定义属性中
    obj.timeID = setInterval(function() {
        // 2. 获取元素的当前位置（真实位置）
        var currentLeft = obj.offsetLeft;

        // 3. 判断移动的方向，定义每次移动的距离
        if (currentLeft < target) {
            // 3.1 当前位置 < 目标位置，元素向右移动
            // 3.2 设置一个移动距离
            var step = 10;
        }
        if (currentLeft > target) {
            // 3.3 当前位置 > 目标位置，元素向左移动
            // 3.4 设置一个移动距离
            var step = -10;
        }
        
        // 4. 移动元素
        currentLeft += step;
        obj.style.left = currentLeft + 'px';

        // 5. 边界检测
        if (step > 0 ? currentLeft >= target : currentLeft <= target) {
            // 5.1 强制让元素到达目标位置
            obj.style.left = target + 'px';
            // 5.2 清楚计时器
            clearInterval(obj.timeID);
        }
    }, 10);
}
