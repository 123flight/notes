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
    search: true,
    searchMaxSuggestoins: 10,
    //最后更新的时间
    lastUpdated: 'Last Updated',
  },
  markdown: { lineNumbers: true },
}