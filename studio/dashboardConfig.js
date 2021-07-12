export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '60eba6a25500d39fc16c5340',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-irmnnre8',
                  apiId: 'ea29c303-f08c-4918-892d-99ec487c5f13'
                },
                {
                  buildHookId: '60eba6a3f3ff096be63a6378',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c6gbi3kf',
                  apiId: '8383dd51-2eb7-4ca9-99b6-5394eb3152ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rylew2/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c6gbi3kf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
