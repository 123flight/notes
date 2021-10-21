module.exports = {
  base: '/notes/',
  lang: 'en-US',
  // title: 'Hello VuePress',
  description: 'Just playing around',

  themeConfig: {
    // 导航栏
    nav: [
      { 
        text: 'GitHub', 
        link: 'https://github.com/123flight', 
        target:'_self', 
        rel:'' 
      },
    ],
    // 侧边栏
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/blog/first/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 3,    // 可选的, 默认值是 1
        children: [
          'first'
        ]
      },
    ],
    //最后更新的时间
    lastUpdated: 'Last Updated',
    logo: '/happy.png',
  }
}