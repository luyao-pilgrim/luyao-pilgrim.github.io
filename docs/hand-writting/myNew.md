# 手写new


## new 的执行过程
- 创建一个对象obj
- 该对象的__proto__指向构造函数Fn的原型prototype
- 执行构造函数Fn的代码，往新创建的对象obj上添加成员属性和方法
- 返回这个新的对象obj

```javascript
const myNew = (func, ...args) => {
    let obj = Object.create(func.prototype)
    let res = func.apply(obj, args)
    return (typeof res === 'object' && res !== null) ? res : obj
}
```



