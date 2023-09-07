# 手写Call. Apply, Bind

```javascript
Function.prototype.myCall = function (ctx, ...args) {
  if (typeof ctx === 'object') {
    ctx = ctx || window
  } else {
    ctx = Object.create(null)
  }
  // 注意细节，用symbol
  let fn = Symbol()
  // 关键一步
  ctx[fn] = this
  ctx[fn](...args)

  delete ctx[fn]
}

Function.prototype.myApply = function (ctx, args) {
  if (typeof ctx === 'object') {
    ctx = ctx || window
  } else {
    ctx = Object.create(null)
  }
  let fn = Symbol()
  // 关键一步
  ctx[fn] = this
  ctx[fn](...args)

  delete ctx[fn]
}

Function.prototype.myBind = function (ctx, ...innerargs) {
  let me = this
  return function (...finalargs) {
    return me.call(ctx, ...innerargs, ...finalargs)
  }
}
```