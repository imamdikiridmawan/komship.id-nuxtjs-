<template>
  <div id="app" style="background-color: #f6f6f9; padding-bottom: 50px">
    <StartNow :openwindow="openWindow" :totalpartners="data" />
    <Services />
    <Benefit />
    <Recommend />
    <Flow />
    <Features
      :replace="replace"
      :replace2="replace2"
    />
    <FeatureMobile
      :replace="replace"
    />
    <Conclusion :openwindow="openWindow" />
    <ConclusionMobile :openwindow="openWindow" />
    <Testimoni />
    <FAQ />
  </div>
</template>

<script>
import StartNow from '../components/home/StartNow.vue'
import Services from '../components/home/Services.vue'
import Benefit from '../components/home/Benefit.vue'
import Recommend from '../components/home/Recomend.vue'
import Flow from '../components/home/Flow.vue'
import Features from '../components/home/Features.vue'
import FeatureMobile from '../components/home/FeatureMobile.vue'
import Conclusion from '../components/home/Conclusion.vue'
import ConclusionMobile from '../components/home/ConclusionMobile.vue'
import Testimoni from '../components/home/Testimoni.vue'
import FAQ from '../components/home/FAQ.vue'

export default {
  components: {
    StartNow,
    Services,
    Benefit,
    Recommend,
    Flow,
    Features,
    FeatureMobile,
    Conclusion,
    ConclusionMobile,
    Testimoni,
    FAQ
  },
  async asyncData ({ $axios }) {
    const { data } = await $axios.$get('https://app.komerce.id/api/homepage/komship/countPartners')
    return {
      data
    }
  },
  head () {
    return {
      title: 'Komship - Platform Kirim Barang',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Komship merupakan platform layanan pengiriman yang bertujuan memudahkan kamu untuk mengirim paket yang didukung dengan metode COD atau Non-COD tanpa batas minimum pengiriman.'
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'komship'
        },
        {
          vmid: 'og-locale',
          property: 'og:locale',
          content: 'id'
        },
        {
          vmid: 'og-type',
          property: 'og:type',
          content: 'website'
        },
        {
          vmid: 'og-title',
          property: 'og:title',
          content: 'Komship - Platform Kirim Barang'
        },
        {
          vmid: 'og-description',
          property: 'og:description',
          content: 'Komship merupakan platform layanan pengiriman yang bertujuan memudahkan kamu untuk mengirim paket yang didukung dengan metode COD atau Non-COD tanpa batas minimum pengiriman.'
        },
        {
          vmid: 'og-url',
          property: 'og:url',
          content: 'https://komship.id/'
        },
        {
          vmid: 'og-site_name',
          property: 'og:site_name',
          content: 'Komship'
        },
        {
          vmid: 'og-image',
          property: 'og:image',
          content: '../static/komship.png'
        },
        {
          vmid: 'og-image-width',
          property: 'og:image:width',
          content: '1280'
        },
        {
          vmid: 'og-image-height',
          property: 'og:image:height',
          content: '720'
        },
        {
          vmid: 'og-see_also',
          property: 'og:see_also',
          content: 'https://www.instagram.com/komship/'
        },
        {
          vmid: 'og-see_also2',
          property: 'og:see_also',
          content: 'https://www.facebook.com/komship/'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './komship-lp.png' },
        {
          vmid: 'canonical',
          rel: 'canonical',
          href: 'https://komship.id/'
        }
      ],
      script: [
        {
          vmid: 'ldjson-schema',
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org/',
            '@type': 'WebSite',
            name: 'Komship',
            description: 'Komship merupakan platform layanan pengiriman yang bertujuan memudahkan kamu untuk mengirim paket yang didukung dengan metode COD atau Non-COD tanpa batas minimum pengiriman.',
            url: 'https://komship.id/',
            image: {
              '@type': 'ImageObject',
              url: 'https://komship.id/img/komship.png',
              height: '720',
              width: '1280'
            },
            sameAs: [
              'https://www.facebook.com/komship/',
              'https://www.instagram.com/komship/'
            ],
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://komship.id/pencarian?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }
        }
      ]
    }
  },
  methods: {
    getAsyncData () {
      const self = this
      window.setTimeout(function () {
        self.title = 'My async title'
        self.$emit('updateHead')
      }, 3000)
    },
    openWindow (url) {
      window.open(url)
      window.fbq('trackCustom', 'PageView')
    },
    replace (hide, show) {
      document.getElementById(hide).style.display = 'none'
      document.getElementById(show).style.display = 'block'
    },
    replace2 (hide, hide2, show) {
      document.getElementById(hide).style.display = 'none'
      document.getElementById(hide2).style.display = 'none'
      document.getElementById(show).style.display = 'block'
    }
  }
}
</script>

<style src="../components/home/Home.css"/>
