# setTimeout,setInterval深入了解

- 同样都是插入到任务队列中
- setInterval发现上一个还在队列中，他会跳过;setInterval是指“开始执行”之间的间隔，不考虑实际执行时间

## setTimeout&&setInterval互相模拟

```javascript

```

## 进阶：如何页面展示精准的倒计时？