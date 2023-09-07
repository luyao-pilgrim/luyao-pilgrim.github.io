import { defaultTheme } from 'vuepress'

module.exports = {
  title: "陆遥的博客",
  description: "JavaScript，Vue，React，Webpack，HTML，CSS等技术分享",
  head: [
    [
      "script",
      {},
      `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?831c09097cdcc6b28d4d8b82e7a2603b";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `,
    ],
    ["meta", { name: "author", content: "ayao" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "前端全栈知识体系， JavaScript， Vue， react， webpack， HTML， CSS，JavaScript算法",
      },
    ],
  ],
  plugins: [
    "vuepress-plugin-nprogress",
    [
      "vuepress-plugin-container",
      {
        type: "tip",
        defaultTitle: {
          "/": "示例",
          "/zh/": "示例",
        },
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    smoothScroll: true,
  },
  repo: "https://github.com/LuYao-pilgrim",
  repoLabel: "Github",

  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'Javascript',
        link: '/js/',
      },
      {
        text: '手撕+算法',
        link: '/手撕+算法/',
      },
      {
        text: 'CSS+HTML',
        link: '/css+html/',
      },
      {
        text: 'React',
        link: '/react/',
      },
      {
        text: 'Vue',
        link: '/vue/',
      },
      {
        text: 'Webpack',
        link: '/webpack/',
      },
    ],
    sidebar: {
        '/react/': [
            {
                title: 'React',
                collapsible: false,
                children: [
                    '/react/',
                    '/react/Hi.md'
                ],
            }
        ],
        '/js/': [
          {
              title: 'Javascript',
              collapsible: false,
              children: [
                  '/js/',
                  '/js/qa.md'
              ],
          }
      ],
        '/手撕+算法/': [
          {
              title: 'JS手撕',
              collapsible: false,
              children: [
                  '/手撕+算法/',
                  '/手撕+算法/eventBus.md',
                  '/手撕+算法/curry.md',
                  '/手撕+算法/debounce_throttle.md',
                  '/手撕+算法/myNew.md',
                  '/手撕+算法/myInstance.md',
                  '/手撕+算法/myCallApplyBind.md',
                  '/手撕+算法/controlRequest.md',
              ],
          }
      ],
    }
  }),
};
