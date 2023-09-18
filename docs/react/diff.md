# React的diff算法


## diff具体流程

- React.createElement生成的是对象，包含tag,children,props等  
- 遵循三个比较原则：树，组件，元素，即只对DOM树同层级比较，只对同一类别元素比较，对key相同的进行复用，位置移动
- 两轮遍历：1.相同复用下去，一旦碰到不一样的-->2.老的全部放进map,新的去map里面看能否复用