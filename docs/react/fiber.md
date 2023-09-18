# Fiber

## 整体React渲染阶段

- render: React.createElement-->vdom转换为fiber，这其中经历diff，fiber身上有是否更改的effectTag  
- commit: 进行dom操作，并执行effect副作用

