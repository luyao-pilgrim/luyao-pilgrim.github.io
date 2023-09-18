# 强缓存，协商缓存具体实践

- js,css都强缓存，因为改变的话webpack的hash变，直接是不同文件
- index.html协商缓存，文件名不变，通过Etag/If-None-Match去匹配
