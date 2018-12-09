module.exports = {
  title: `Documentation`,
  description: `For Training and Projects created by Juan Pablo Perez`,
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],  
  themeConfig: {
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
    sidebar: 'auto'
  }  
}