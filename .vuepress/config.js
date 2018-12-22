module.exports = ctx => ({
  title: `Documentation`,
  description: `For Training and Projects`,
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  ga: 'UA-130949957-1',
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-130949957-1'
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10      
    }]       
  ],        
  themeConfig: {
    algolia: ctx.isProd ? ({
      apiKey: '9d9b53b6e2f953299ac9ab6d8b6428d1',
      indexName: 'peelmicro'
    }) : null,
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Projects', link: '/projects/'},
      { text: 'Front End', link: '/frontend/'},
      { text: 'Back End', link: '/backend/'},
      { text: 'Databases', link: '/databases/'},
      { text: 'Static Webs', link: '/staticwebs/'},
      { text: 'Other', link: '/other/'},
      { text: 'About me', link: 'https://github.com/peelmicro'},
      { text: 'Github', link: 'https://github.com/peelmicro/documentation'},
    ],
    sidebar: {
      '/projects/': [
        '',
        'documentation',
        'dotnet-core-multi-docker',
        'java-multi-docker',
        'python-multi-docker',
        'dotnet-core-react-redux-advanced',
        'purchase-slack-command-dotnet',
        'node-with-vuejs-fullstack-web-development',
        'ethereum-kickstart-vue',
        'devmeetup-vuetify-nuxt'
      ],
      '/frontend/': [
        '',
        {
          title: 'Vue.js',
          collapsable: true,
          children: [
            'vuejs',
            '/projects/node-with-vuejs-fullstack-web-development',
            '/projects/ethereum-kickstart-vue',
            '/frontend/vuejs-a-comprehensive-project-with-vuetify-and-firebase',
            '/projects/devmeetup-vuetify-nuxt',
            '/frontend/vuejs-nuxtjs-vuejs-on-steroids',
            '/frontend/vuejs-vuejs-2-essentials',
            '/frontend/vuejs-vuejs-build-a-full-stack-app-with-firebase-vuex-router',
            '/frontend/vuejs-vuejs-2-and-bootstrap-4-web-development',
            '/frontend/vuejs-vue-js-single-page-applications',
            '/frontend/vuejs-vuejs-getting-started'
          ]
        },
        {
          title: 'React',
          collapsable: true,
          children: [
            'react',
            '/other/docker-multi-docker',
            '/backend/nodejs-advanced-node-for-developers',
            '/backend/nodejs-node-with-react-fullstack-web-development',
            '/other/blockchain-ethereum-kickstart',
            '/frontend/react-react-redux'
          ]
        },
        {
          title: 'Angular',
          collapsable: true,
          children: [
            'angular',
            'angular-angular-pwa-course',
            'angular-angular-material-course',
            'angular-angular-full-app-with-angular-material-angularfire-ngrx',
            '/backend/dotnetcore-asp-net-core-angular-from-scratch',
            '/backend/java-angular-4-java-developers',
            'angular-the-complete-guide-to-angular-2'
          ]
        },
        {
          title: 'JavaScript',
          collapsable: true,
          children: [
            'javascript',
            'javascript-javascript-es6-tutorial',
            'javascript-progressive-web-app-pwa-the-complete-guide'
          ]
        },
        {
          title: 'CSS',
          collapsable: true,
          children: [
            'css',
            'css-css-the-complete-guide-incl-flexbox-grid-sass',
            'css-travel-site'
          ]
        }
      ],
      '/backend/': [
        '',
        {
          title: 'Node.js',
          collapsable: true,
          children: [
            'nodejs',
            '/other/docker-multi-docker',
            'nodejs-advanced-node-for-developers',
            '/other/bot-how-to-create-a-slack-bot-to-automate-tasks-for-you',
            'nodejs-node-with-react-fullstack-web-development',
            '/projects/node-with-vuejs-fullstack-web-development',
            '/other/blockchain-ethereum-kickstart',
            '/projects/ethereum-kickstart-vue'
          ]
        },
        {
          title: 'Java',
          collapsable: true,
          children: [
            'java',
            '/projects/java-multi-docker',            
            'java-mastering-micro-services-using-java-sprint-boot',
            'java-angular-4-java-developers',
            'java-spring-framework-video-tutorial',
            'java-mavencrashcourse'
          ]
        },
        {
          title: 'Python',
          collapsable: true,
          children: [
            'python',
            '/projects/python-multi-docker',
            'python-pythonforbeginnersintro'
          ]
        },
        {
          title: '.Net Core',
          collapsable: true,
          children: [
            'dotnetcore',
            'dotnetcore-aplicaciones-web-en-tiempo-real-con-signalr-core',
            'dotnetcore-asp-net-core-angular-from-scratch',
            'dotnetcore-aspnet-core-2-security-and-identity-management-with-c',
            '/projects/purchase-slack-command-dotnet',
            'dotnetcore-asp-dot-net-core-oauth'
          ]
        },
        {
          title: '.Net',
          collapsable: true,
          children: [
            'dotnet',
            'dotnet-the-ultimate-linq-with-csharp-masterclass-basics-to-advanced',
            'dotnet-dotnet-ecosystem-big-picture'
          ]
        }
      ],
      '/databases/': [
        '',
        {
          title: 'Firebase',
          collapsable: true,
          children: [
            'firebase',
            '/databases/firebase-firebase-firestore-getting-started',
            '/other/bot-how-to-create-a-slack-bot-to-automate-tasks-for-you',
            '/projects/purchase-slack-command-dotnet',
            '/frontend/vuejs-a-comprehensive-project-with-vuetify-and-firebase',
            '/projects/devmeetup-vuetify-nuxt',
            '/frontend/vuejs-vuejs-build-a-full-stack-app-with-firebase-vuex-router',
            '/frontend/vuejs-vuejs-2-and-bootstrap-4-web-development',
            '/databases/firebase-firebase-cookbook',
            '/databases/firebase-android-firebase-email-authentication-verification'
          ]
        },
        {
          title: 'MongoDB',
          collapsable: true,
          children: [
            'mongodb',
            '/backend/nodejs-advanced-node-for-developers',
            '/projects/dotnet-core-react-redux-advanced',
            '/backend/java-angular-4-java-developers',
            '/backend/nodejs-node-with-react-fullstack-web-development',
            '/projects/node-with-vuejs-fullstack-web-development'            
          ]
        },
        {
          title: 'SQL Server',
          collapsable: true,
          children: [
            'sqlserver'
          ]
        },        
        {
          title: 'PostgreSQL',
          collapsable: true,
          children: [
            'postgresql',
            '/other/docker-multi-docker',
            '/projects/dotnet-core-multi-docker',
            '/projects/java-multi-docker',
            '/projects/python-multi-docker'            
          ]
        },
        {
          title: 'MySQL',
          collapsable: true,
          children: [
            'mysql',
            '/backend/dotnetcore-asp-net-core-angular-from-scratch'
          ]
        },                
        {
          title: 'SQLite',
          collapsable: true,
          children: [
            'sqlite',
            '/backend/dotnetcore-asp-net-core-angular-from-scratch'
          ]
        }             
      ],
      '/staticwebs/': [
        '',
        {
          title: 'Markdown',
          collapsable: true,
          children: [
            'markdown',
            'markdown-easy-markdown-with-vs-code',
          ]
        },
        {
          title: 'VuePress',
          collapsable: true,
          children: [
            'vuepress',
            'vuepress-how-to-use-vuepress-for-a-documentation-site',
          ]
        },
        {
          title: 'Confluence',
          collapsable: true,
          children: [
            'confluence',
            'confluence-understanding-confluence-for-users-managers-and-admins'
          ]
        }
      ],
      '/other/': [
        'courses',
        {
          title: 'Docker',
          collapsable: true,
          children: [
            'docker',
            'docker-multi-docker',
            '/projects/dotnet-core-multi-docker',
            '/projects/java-multi-docker',
            '/projects/python-multi-docker'
          ]
        },
        {
          title: 'Blockchain',
          collapsable: true,
          children: [
            'blockchain',
            'blockchain-ethereum-kickstart',
            '/projects/ethereum-kickstart-vue',
            'blockchain-surveying-blockchain-technologies-enterprise'           
          ]
        },
        {
          title: 'Visual Studio',
          collapsable: true,
          children: [
            'visualstudio',
            '/staticwebs/markdown-easy-markdown-with-vs-code',
            'visualstudio-vs-resharper',
            'visualstudio-exploring-visual-studio-2017-video'
          ]
        },
        {
          title: 'Regular Expressions',
          collapsable: true,
          children: [
            'regex',
            'regex-regex-academy-an-introduction-to-text-parsing-sorcery'
          ]
        },
        {
          title: 'Internet bot',
          collapsable: true,
          children: [
            'bot',
            'bot-how-to-create-a-slack-bot-to-automate-tasks-for-you',
            '/projects/purchase-slack-command-dotnet'
          ]
        },
        {
          title: 'Microservices',
          collapsable: true,
          children: [
            'microservices',
            'microservices-modern-software-architecture-domain-models-cqrs-event-sourcing'
          ]
        },
        {
          title: 'Git',
          collapsable: true,
          children: [
            'git',
            'git-mastering-git',
            'git-how-git-works'
          ]
        },
        {
          title: 'PCI',
          collapsable: true,
          children: [
            'pci',
            'pci-pci-dss-big-picture',
            'pci-payment-card-security-processing-pci-standards'
          ]
        }
      ]
    }
  } 
})