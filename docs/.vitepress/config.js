export default {
  title: 'Fastee Wiki',
  description: 'База знаний',
  head: [
    [
      'script',
      {},
      `(function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108257267','ym');
      ym(108257267, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`
    ]
  ],
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Сайт', link: 'https://fstee.ru' },
    ],
    sidebar: [
      {
        text: '📖 О сервисе',
        items: [
          { text: 'О сервисе', link: '/about-service' },
          { text: 'Личный кабинет', link: '/lk' },
        ]
      },
      {
        text: '📱 iOS',
        items: [
          { text: 'Частые проблемы', link: '/ios-problems/ios' },
        ]
      },
      {
        text: '🤖 Android',
        items: [
          { text: 'Частые проблемы', link: '/android-problems/android' },
        ]
      },
      {
        text: '🪟 Windows',
        items: [
          { text: 'Частые проблемы', link: '/windows-problems/windows' },
        ]
      },
      {
        text: '🍎 macOS',
        items: [
          { text: 'Частые проблемы', link: '/macos-problems/macos' },
        ]
      },
      {
        text: '💬 Поддержка',
        items: [
          { text: 'Связаться с нами', link: '/support' },
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
}
