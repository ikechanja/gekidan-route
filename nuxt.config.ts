// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  
  generate: {
    exclude: [
      /^\/dynamic-route\//,
    ]
  },
  modules: [
    '@nuxt/content',
  ],
  css: [
    // プロジェクト内の CSS ファイル
    '@/assets/css/style.css',
  ],
  app: {
    head: {
        title:"劇団ルート",
        link: [
          {rel: "stylesheet",href: "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"},
          {rel: "stylesheet",href: "https://unpkg.com/nprogress@0.2.0/nprogress.css"}
        ],
        script: [
          {src: 'https://code.jquery.com/jquery-3.7.1.js',
          defer: true},
          {src: '/_nuxt/assets/js/hum.js',
          defer: true},
          {src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
          defer: true},
          {src: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
          defer: true},
          {src: 'https://unpkg.com/nprogress@0.2.0/nprogress.js',
          defer: true},
          {src: '/_nuxt/assets/js/gsap.js',
          defer: true},
          {src: '/_nuxt/assets/js/slide.js',
          defer: true},
          {src: '/_nuxt/assets/js/nprogress.js',
          defer: true},
        ],
      }
    }
})
