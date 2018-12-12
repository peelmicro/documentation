module.exports = {
  title: `Documentation`,
  description: `For Training and Projects`,
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],  
  themeConfig: {
    algolia: {
      apiKey: '9d9b53b6e2f953299ac9ab6d8b6428d1',
      indexName: 'peelmicro'
    },    
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Projects', link: '/projects/'},
      { text: 'Front End', link: '/frontend/'},
      { text: 'Back End', link: '/backend/'},
      { text: 'Static Webs', link: '/staticwebs/'},
      { text: 'Microservices', link: '/microservices/'},
      { text: 'Other', link: '/other/'},
      { text: 'About me', link: 'https://github.com/peelmicro'},
      { text: 'Github', link: 'https://github.com/peelmicro/documentation'},
    ],
    sidebar: {
      '/projects/': [
        '',
        'documentation.md',
        'dot-net-multi-docker.md',
        'java-multi-docker.md',
        'python-multi-docker.md',
        'dot-net-core-react-redux-advanced.md',
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
            'javascript'
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
            'nodejs'
          ]
        },
        {
          title: 'Java',
          collapsable: false,
          children: [
            'java'
          ]
        },
        {
          title: 'Python',
          collapsable: false,
          children: [
            'python'
          ]
        },
        {
          title: '.Net Core',
          collapsable: false,
          children: [
            'dotnetcore'
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
      '/microservices/': [
        '',
        {
          title: 'Development',
          collapsable: false,
          children: [
            'development'
          ]
        },
        {
          title: 'Docker',
          collapsable: false,
          children: [
            'docker'
          ]
        },
        {
          title: 'Kubernetes',
          collapsable: false,
          children: [
            'kubernetes'
          ]
        }
      ],
      '/other/': [
        '',
        {
          title: 'Blockchain',
          collapsable: false,
          children: [
            'blockchain'
          ]
        },
        {
          title: 'Excel',
          collapsable: false,
          children: [
            'excel'
          ]
        }
      ]
    }
  } 
}