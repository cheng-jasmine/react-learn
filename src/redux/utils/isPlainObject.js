//判断一个对象是否时一个plain-object
export default function isPlainObject(obj) {
    if (typeof obj !== "object") {
        return false
    }
    return Object.getPrototypeOf(obj) === Object.prototype
}