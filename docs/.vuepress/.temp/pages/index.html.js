export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"lang\":\"zh-CN\",\"heroText\":\"记录生活，记录技术\",\"heroImage\":\"/luyao_small.jpg\",\"actionText\":\"重新出发 ->\",\"actionLink\":\"/\",\"features\":[{\"title\":\"JavaScript\",\"details\":\"重新学习JavaScript，记录学习过程及分享。\"},{\"title\":\"React\",\"details\":\"记录学习 react 知识及分享。\"},{\"title\":\"Vue\",\"details\":\"记录学习 Vue 知识及分享。\"},{\"title\":\"JavaScript 算法与数据结构\",\"details\":\"学习 JavaScript 算法与数据结构，记录学习过程及分享。\"},{\"title\":\"CSS\",\"details\":\"CSS知识及CSS相关的面试题答案。\"}],\"footer\":\"Copyright © 2023 LuYao\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
