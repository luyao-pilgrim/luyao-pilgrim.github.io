# 函数柯里化

```javascript
const curry = (fn) => {
    function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function(...args2) {
                return curried.apply(this, [...args, ...args2])
            }
        }
    }

    return curried
}
```

## 小进阶-->实现sum(1,2,3,4)(5)(6).sumOf()

```javascript
function sum(...args) {

  const add = (...otherArgs) => {
    args.push(otherArgs)
    return add
  }

  let sumOf = () => {
    // 对args求和
  }


  return add(...args)
}
```