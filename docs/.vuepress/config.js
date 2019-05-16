module.exports = {
  base: '/vue-source/',
  dest: 'dist',
  title: 'Vue.js 源码解析',
  description: 'vue.js deeply',
  head: [
      ['link', { rel: 'icon', href: `/logo.png` }],
      ['link', {rel: 'manifest', href: '/manifest.json'}],
      ['meta', {name: 'theme-color', content: '#3eaf7c'}],
      ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
      ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: false,
  themeConfig: {
      repo: 'berlinen/About-Vue-Source-Code',
      editLinks: true,
      docsDir: 'docs',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdated: '上次更新',
      nav: [
          {
              text: '个人主页',
              link: 'https://github.com/berlinen/'
          }
      ],
      sidebar: [
        {
          title: '准备工作',
          collapsable: false,
          children: [
              ['prepare/', 'Introduction'],
              'prepare/flow',
              'prepare/directory',
              'prepare/build',
              'prepare/entrance'
          ]
       }
    ]
  }
}
