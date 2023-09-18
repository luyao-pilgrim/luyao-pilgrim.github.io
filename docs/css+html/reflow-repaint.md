# 回流重绘

### 减少回流  

- 频繁更改的元素设置为absolute, fixed脱离文档流，不影响其他  
- class尽量具体详细,不影响其他  
- 使用CSS加速的transform, opacity  
- 动态插入时批量操作尽量（虚拟DOM思想）