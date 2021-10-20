module.exports = {
  base: '/notes/',
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',

  themeConfig: {
    // 导航栏
    nav: [
      { text: 'GitHub', link: 'https://github.com/123flight', target:'_self', rel:'' },
    ],
    // 侧边栏
    sidebar: [
      '/'
    ],
    // 最后更新的时间
    lastUpdated: 'Last Updated',
    logo: '/public/images/happy.png',
  }
}