
let timer1, timer2
/**
 * 滚动条横向和纵向复位
*/
export default function resetScroll() {
    clearInterval(timer1)
    clearInterval(timer2)
    var html = document.documentElement
    timer1 = animate(html.scrollTop, 0, (val) => {
        html.scrollTop = val
    })
    timer2 = animate(html.scrollLeft, 0, (val) => {
        html.scrollLeft = val
    })
}


function animate(start, end, callback) {
    var tick = 16 // 每个16毫秒完成一次变化
    var total = 300 //总时间为300毫秒
    var times = Math.ceil(total / tick) //变化的次数
    var curTimes = 0
    var dis = (end - start) / times // 总距离/次数，每次运动的距离
    var timer = setInterval(() => {
        curTimes++
        start += dis
        // console.log(start)
        if (curTimes === times) {
            start = end
            clearInterval(timer)
        }
        callback(start)
    }, tick);
    return timer
}