// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
          },
          {src: '/_nuxt/assets/js/hum.js',
          },
          {src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
          },
          {src: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
          },
          {src: 'https://unpkg.com/nprogress@0.2.0/nprogress.js',
          },
          {src: '/_nuxt/assets/js/gsap.js',
          },
          {src: '/_nuxt/assets/js/slide.js',
          },
          {src: '/_nuxt/assets/js/nprogress.js',
          },
        ],
      }
    }
})
