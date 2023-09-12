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
        text: '面试',
        link: '/interview/',
      },
      {
        text: '手撕+算法',
        link: '/hand-writting/',
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
                    '/react/fiber.md',
                    '/react/diff.md',
                    '/react/hooks.md',
                    '/react/redux.md',
                ],
            }
        ],
        '/js/': [
          {
              title: 'Javascript',
              collapsible: false,
              children: [
                  '/js/',
                  '/js/bigfile.md'
              ],
          }
        ],
        '/interview/': [
          {
              title: '面试',
              collapsible: false,
              children: [
                  '/interview/',
                  '/interview/2023fall.md'
              ],
          }
        ],
        '/css+html/': [
          {
              title: 'CSS+HTML',
              collapsible: false,
              children: [
                  '/css+html/',
                  '/css+html/reflow-repaint.md',
                  '/css+html/animation.md',
              ],
          }
        ],
        '/hand-writting/': [
          {
              title: 'JS手撕',
              collapsible: false,
              children: [
                  // '/hand-writting/',
                  '/hand-writting/eventBus.md',
                  '/hand-writting/curry.md',
                  '/hand-writting/debounce_throttle.md',
                  '/hand-writting/myNew.md',
                  '/hand-writting/myInstance.md',
                  '/hand-writting/myCallApplyBind.md',
                  '/hand-writting/controlRequest.md',
                  '/hand-writting/sort.md',
              ],
          },
        ],
    }
  }),
};
