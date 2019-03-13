module.exports = {
  title: 'SDK文档集',
  description: 'SDK,文档集,SDK文档集',
  base: '/sdk/docs/',
  themeConfig: {
    nav: [
      { text: '接口定义', link: '/apiword' },
      { text: '接口字段定义', link: '/api' },
      { text: '附录：错误码', link: '/error' }
    ],
    sidebar: {
      // '/baseComponents/': [
      //   {
      //     title: '布局类组件',
      //     collapsable: true,
      //     children: [
      //       'base/test1',
      //       'base/test2',
      //     ]
      //   },
      // ],
      // '/foo/': [
      //   {
      //     title: '工具类类组件',
      //     collapsable: true,
      //     children: [
      //       'base/one',
      //       'base/two',
      //     ]
      //   },
      // ],
      '/': [
        {
          title: '布局类组件',
          collapsable: true,
          children: [
            'baseComponents/base/test1',
            'baseComponents/base/test2',
          ]          
        },
        {
          title: '工具类组件',
          collapsable: true,
          children: [
            ['foo/base/one','我就不想'],
            ['foo/base/two','我就很想'],
          ]          
        }
      ]
    },
  }
}