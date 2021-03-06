// 动画基本原理
// var timer = setInterval(() => {
//     if (oBox.offsetLeft >= 400) {
//         clearInterval(timer);
//     }
//     // 获得盒子的当前位置 并在当前位置+移动步长
//     oBox.style.left = oBox.offsetLeft + 1 + 'px';
// }, 20);
//动画缓动原理封装
function animate(obj, target, callback) {
    // *******************
    // 出于性能考虑 这里不使用 var timer
    // 使用 obj.timer  给obj添加属性，这样就不会在内存上开辟新的空间
    clearInterval(obj.timer); // 确保只有一个定时器
    obj.timer = setInterval(() => {
        if (obj.offsetLeft === target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        // 获得盒子的当前位置 并在当前位置+移动步长
        // obj.style.left = obj.offsetLeft + 1 + 'px';  // 匀速动画
        // 缓动基本原理  每次移动步长 =（目标值 - 现在位置）/10
        // Math.ceil()   正值时 向上取整
        // Math.floor()  负值时 向下取整
        var step = (target - obj.offsetLeft) / 10;
        if (step > 0) {
            step = Math.ceil(step);
        } else {
            step = Math.floor(step);
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 20);
}