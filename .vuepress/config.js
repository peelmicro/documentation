module.exports = ctx => ({
  title: `Documentation`,
  description: `For Training and Projects`,
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],  
  themeConfig: {
    algolia: ctx.isProd ? ({
      apiKey: '9d9b53b6e2f953299ac9ab6d8b6428d1',
      indexName: 'peelmicro'
    }) : null,
    plugins: [
      ['@vuepress/google-analytics', {
        ga: 'UA-130949957-1'
      }],
      ['@vuepress/search', {
        searchMaxSuggestions: 10      
      }]      
    ],      
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Projects', link: '/projects/'},
      { text: 'Front End', link: '/frontend/'},
      { text: 'Back End', link: '/backend/'},
      { text: 'Static Webs', link: '/staticwebs/'},
      { text: 'Other', link: '/other/'},
      { text: 'About me', link: 'https://github.com/peelmicro'},
      { text: 'Github', link: 'https://github.com/peelmicro/documentation'},
    ],
    sidebar: {
      '/projects/': [
        '',
        'documentation.md',
        'dotnet-core-multi-docker.md',
        'java-multi-docker.md',
        'python-multi-docker.md',
        'dotnet-core-react-redux-advanced.md',
        'purchase-slack-command-dotnet.md',
        'node-with-vuejs-fullstack-web-development.md',
        'ethereum-kickstart-vue.md',
        'devmeetup-vuetify-nuxt.md'
      ],
      '/frontend/': [
        '',
        {
          title: 'Vue.js',
          collapsable: false,
          children: [
            'vuejs'
          ]
        },
        {
          title: 'React',
          collapsable: false,
          children: [
            'react'
          ]
        },
        {
          title: 'Angular',
          collapsable: false,
          children: [
            'angular'
          ]
        },
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            'javascript',
            'javascript-javascript-es6-tutorial',
            'javascript-progressive-web-app-pwa-the-complete-guide'
          ]
        },
        {
          title: 'CSS',
          collapsable: false,
          children: [
            'css'
          ]
        }
      ],
      '/backend/': [
        '',
        {
          title: 'Node.js',
          collapsable: false,
          children: [
            'nodejs',
            '/other/docker-multi-docker',
            'nodejs-advanced-node-for-developers'
          ]
        },
        {
          title: 'Java',
          collapsable: false,
          children: [
            'java',
            '/projects/java-multi-docker',            
            'java-mastering-micro-services-using-java-sprint-boot'
          ]
        },
        {
          title: 'Python',
          collapsable: false,
          children: [
            'python',
            '/projects/python-multi-docker',
            'python-pythonforbeginnersintro'
          ]
        },
        {
          title: '.Net Core',
          collapsable: false,
          children: [
            'dotnetcore',
            'dotnetcore-aplicaciones-web-en-tiempo-real-con-signalr-core'
          ]
        },
        {
          title: '.Net',
          collapsable: false,
          children: [
            'dotnet'
          ]
        }
      ],
      '/staticwebs/': [
        '',
        {
          title: 'Markdown',
          collapsable: false,
          children: [
            'markdown',
            'markdown-easy-markdown-with-vs-code',
          ]
        },
        {
          title: 'VuePress',
          collapsable: false,
          children: [
            'vuepress',
            'vuepress-how-to-use-vuepress-for-a-documentation-site',
          ]
        }
      ],
      '/other/': [
        '',
        {
          title: 'Docker',
          collapsable: false,
          children: [
            'docker',
            'docker-multi-docker'
          ]
        },
        {
          title: 'Blockchain',
          collapsable: false,
          children: [
            'blockchain'
          ]
        },
        {
          title: 'Visual Studio',
          collapsable: false,
          children: [
            'visualstudio',
            '/staticwebs/markdown-easy-markdown-with-vs-code',
            'visualstudio-vs-resharper'  
          ]
        },
        {
          title: 'RegEx',
          collapsable: false,
          children: [
            'regex',
            'regex-regex-academy-an-introduction-to-text-parsing-sorcery'
          ]
        }
      ]
    }
  } 
})