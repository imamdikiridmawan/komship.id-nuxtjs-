<template>
  <CekOngkir />
</template>

<script>
import CekOngkir from '../components/CekOngkir.vue'

export default {
  components: {
    CekOngkir
  },
  head () {
    return {
      title: 'Cek Ongkir JNE, SiCepat, ID Express 2022',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content:
            'Cek ongkos kirim secara cepat & akurat dari berbagai ekspedisi (JNE, SiCepat, ID Express). Dapat diskon loh jika kirim pakai Komship.'
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'Cek Ongkir JNE, Cek Ongkir SiCepat, Cek Ongkir ID Express'
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
          content: 'Cek Ongkir JNE, SiCepat, ID Express 2022'
        },
        {
          vmid: 'og-description',
          property: 'og:description',
          content:
            'Cek ongkos kirim secara cepat & akurat dari berbagai ekspedisi (JNE, SiCepat, ID Express). Dapat diskon loh jika kirim pakai Komship.'
        },
        {
          vmid: 'og-url',
          property: 'og:url',
          content: 'https://komship.id/cek-ongkir/'
        },
        {
          vmid: 'og-site_name',
          property: 'og:site_name',
          content: 'Komship'
        },
        {
          vmid: 'og-image',
          property: 'og:image',
          content: 'https://komship.id/cek-ongkir.png'
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
        // { rel: 'icon', type: 'image/x-icon', href: './cek-ongkir.png' },
        {
          vmid: 'canonical',
          rel: 'canonical',
          href: 'https://komship.id/cek-ongkir/'
        }
      ],
      script: [
        {
          vmid: 'ldjson-schema',
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Komship',
            legalName: 'Komship',
            logo: 'https://komship.id/img/komship.png',
            url: 'https://komship.id/',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Jl. Raya Tamansari, Kompleks Karangwuni, Desa Tamansari, Karangmoncol',
              addressLocality: 'Purbalingga',
              postalCode: '53355',
              addressCountry: 'ID'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer service',
              email: 'mailto:support@komship.id',
              telephone: '081227931840'
            },
            sameAs: [
              'https://www.facebook.com/komship/',
              'https://www.instagram.com/komship/'
            ]
          }
        }
      ]
    }
  }
}
</script>
