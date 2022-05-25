module.exports = {
  base: '/notes/',
  lang: 'en-US',
  title: 'Happy 的博客',
  description: 'Just playing around',

  themeConfig: {
    // 导航栏
    nav: [
      { 
        text: 'Home', 
        link: '/', 
        target:'_self',
      },
      {
        text: 'Contact', 
        items: [
          { 
            title: 'GitHub',
            link: 'https://github.com/123flight',
          }
        ]
      }
    ],
    sidebar: {
      '/views/': [
        '',
        {
          title: '项目中碰到的问题',
          collapsable: true,
          children: ['question/关于input 类型为 file 时不能选择相同文件']
        }
      ],
    },
    search: true,
    searchMaxSuggestoins: 10,
    //最后更新的时间
    lastUpdated: 'Last Updated',
  },
  markdown: { lineNumbers: true },
}