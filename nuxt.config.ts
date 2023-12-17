// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages',
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
          body: true},
          {src: '/_nuxt/assets/js/hum.js',
          body: true},
          {src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
          body: true},
          {src: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
          body: true},
          {src: 'https://unpkg.com/nprogress@0.2.0/nprogress.js',
          body: true},
          {src: '/_nuxt/assets/js/gsap.js',
          body: true},
          {src: '/_nuxt/assets/js/slide.js',
          body: true},
          {src: '/_nuxt/assets/js/nprogress.js',
          body: true},
        ],
      }
    }
})
