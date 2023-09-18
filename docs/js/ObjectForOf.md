# Object的for...of问题

- for..of只能遍历实现Iterator接口的对象，自己去原型链上实现

```javascript
function objectIterator() {
  const keys = Object.keys(this)
  let index = 0
  return {
    next: () => {
      const done = index >= keys.length
      const value = done ? undefined : this[keys[index]]
      index++
      return {
        done,
        value
      }
    }
  }
}

Object.prototype[Symbol.iterator] = objectIterator
```

- 那为什么不实现for..of呢？  

总结起来，对象的property至少有三个方面的因素：  
1. property的来源：是仅 own property 还是包括原型链上的；  
2. key的类型：是仅 string 还是包括 symbol 在内；  
3. property的[[Enumerable]] attribute：是仅可枚举（enumerable为true）还是包括不可枚举的。

- 组合太多了，不如交给程序员自己看用哪种~
```javascript
for (const k of Object.keys(obj)) ... // enumerable own keys
for (const [k, v] of Object.entries(obj)) ... // enumerable own [key, value]s
for (const k of Object.getOwnPropertyNames(obj)) // all own keys
for (const s of Object.getOwnPropertySymbols(obj)) // all own symbols
for (const k of Reflect.ownKeys(obj)) // all own keys (include symbols)
```