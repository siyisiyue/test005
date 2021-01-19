//防抖函数：请求频繁做的延时处理
export function debounce(func, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearInterval(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}