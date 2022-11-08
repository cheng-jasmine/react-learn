
//得到一个指定长度的随机字符串
function getRandomString(length) {
    return Math.random().toString(36).substring(2, length).split("").join(".")
}

export default {
    INIT() {
        return `@@redux/LINT${getRandomString(6)}`
    },
    UNKNOW() {
        return `@@redux/PROBE_UNKNOW_ACTION${getRandomString(6)}`
    }
}