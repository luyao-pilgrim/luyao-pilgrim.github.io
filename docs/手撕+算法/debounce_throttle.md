# 防抖， 节流

## 防抖

- 场景：按钮触发，搜索联想

```javascript
const debounce = (func, delay) => {
    let timer = null

    return function (...args) {
        clearTimeout(timer)

        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}
```

## 节流

- 场景：scroll判断顶部，底部

```javascript
// 基于时间戳
const throttle = function (func, delay) {
    let startTime = Date.now()

    return function(...args) {
        lastTime = Date.now()
        if(lastTime - startTime > delay) {
            func.apply(this,args)
            startTime = Date.now()
        }
    }
}

// 基于定时器
const throttle2 = function (func, delay) {
    let timer = null

    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, args)
                timer = null
            }, delay) 
        }
    }
}
```