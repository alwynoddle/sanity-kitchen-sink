export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60128a5e879709e685873b2e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-txhaw7yg',
                  apiId: '2c8a424f-035c-4138-8073-f131ca7e204d'
                },
                {
                  buildHookId: '60128a5edd01faab8bbfb5c4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kdwwuf2r',
                  apiId: '629d7fa0-da45-4834-94e6-970bc12085e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alwynoddle/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kdwwuf2r.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
