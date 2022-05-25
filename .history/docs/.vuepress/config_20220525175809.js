module.exports = {
  base: '/notes/',
  lang: 'en-US',
  title: '的个人博客',
  description: 'Just playing around',
  dest: 'public',
  head: [
    [ 'link', { rel: 'stylesheet', href: '/css/style.css' } ],
  ],
  markdown: { lineNumbers: true, },

  themeConfig: {
    sidebar: 'auto',
    // // 导航栏
    nav: [
      {
        text: 'Contact',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/123flight',
            target: '_blank',
          }
        ],
      },
      {
        text: 'Home',
        link: '/',
      }
    ],
    sidebar: {
      '/views/': [
        '',
        {
          title: '算法',
          collapsable: true,
          children: [ 'algorithm/test']
        },
        {
          title: '工具使用',
          collapsable: true,
          children: [ 'tools/postman', 'tools/git']
        }
      ]
    },
    collapsable: true,
    search: true,
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: '有新的内容.',
        buttonText: '更新',
      },
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页！',
    //最后更新的时间
    lastUpdated: 'Last Updated',
  }
}