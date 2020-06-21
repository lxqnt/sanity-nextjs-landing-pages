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
                  buildHookId: '5eeff099028bdd7f7793e4bd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-o1kj7865',
                  apiId: '88db69d1-65c3-4728-bf6f-f172c8820888'
                },
                {
                  buildHookId: '5eeff0a2028bddd10493e3c2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-msad18o7',
                  apiId: 'fccc1a7c-145f-4dad-bf71-9dd8b6ae0dda'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lxqnt/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-msad18o7.netlify.app', category: 'apps'}
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
