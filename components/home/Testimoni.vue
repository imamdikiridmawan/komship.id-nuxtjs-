<template>
  <section class="testimoni" data-aos="fade-up" data-aos-duration="1500">
    <h3 class="title">
      <span style="color: #f95031">Komship</span> telah dipercaya oleh
      Pebisnis dan UMKM di Indonesia
    </h3>

    <VueSlickCarousel v-bind="settings">
      <div v-for="item in testimoni_items" id="swiper" :key="item.id" class="content-desktop swiper">
        <div class="swiper-wrapper">
          <div class="card carousel__item swiper-slide">
            <div class="head">
              <div class="profile">
                <img :src="item.image">
              </div>
              <span class="name">{{ item.name }}</span>
            </div>
            <div class="content">
              {{ item.description }}
            </div>
          </div>
        </div>
        <!-- <div class="swiper-button-next" />
          <div class="swiper-button-prev" /> -->
      </div>
    </VueSlickCarousel>

    <div id="swiper" class="content-mobile swiper">
      <div class="swiper-wrapper">
        <div v-for="item in testimoni_items" :key="item.id">
          <div class="card carousel__item swiper-slide">
            <div class="head">
              <div class="profile">
                <img :src="item.image">
              </div>
              <span class="name">{{ item.name }}</span>
            </div>
            <div class="content">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next" />
      <div class="swiper-button-prev" />
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: 'Testimoni',
  components: { VueSlickCarousel },
  data () {
    return {
      settings: {
        dots: false,
        infinite: true,
        initialSlide: 2,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: '20px',
        focusOnSelect: true
      },
      testimoni_items: [
        {
          id: 1,
          image: require('@/assets/img/avatars/testimoni-1.svg'),
          name: 'Mansur',
          description:
            'Komship bagus banget konsepnya, menciptakan kemudahan penjual untuk mengirim barang, apalagi ada fitur COD tanpa harus daftar ribet ke jasa kirim, UI nya juga mudah dipahami untuk pemula'
        },
        {
          id: 2,
          image: require('@/assets/img/avatars/testimoni-2.svg'),
          name: 'Nursiswanto',
          description:
            'Komship Mantap👍👍👍 Cashbacknya besar, kalau bisa ditingkatkan lagi. Pencairan setiap hari bikin cash flow aman'
        },
        {
          id: 3,
          image: require('@/assets/img/avatars/testimoni-3.svg'),
          name: 'Diki Moh. Ghani ',
          description:
            'Komship lebih easy user, fitur-fiturnya juga bagus, kita bisa tahu secara otomatis CS yang jualannya paling kenceng dan yang paling kurang kenceng.Selain itu juga ada fitur keuangannya jadi sangat membantu banget. Dan jika ada kendala Tim Supportnya fast respon'
        },
        {
          id: 4,
          image: require('@/assets/img/avatars/testimoni-4.svg'),
          name: 'Diki Arliansyah',
          description:
            'Komship sangat membantu untuk Umkm, merasa terbantu dengan adanya komship, membuat proses input order jadi lebih mudah, apalagi dengan fitur2 komship yg simpel dan mudah dipahami + tentunya dengan cashback 25% 😁'
        },
        {
          id: 5,
          image: require('@/assets/img/avatars/testimoni-5.svg'),
          name: 'Eko Sulistiyono ',
          description:
            'Alhamdulilah lancar , fiturnya mudah di pahami juga. Apalagi, Kalau ada kendala team Komship siap membantu dan fast respon. Pemakaiannya juga simple, beda sama Aplikasi serupa yang lain.'
        },
        {
          id: 6,
          image: require('@/assets/img/avatars/testimoni-6.svg'),
          name: 'Agus David Saputra',
          description:
            'Baru ada platform yang sekeren ini dan sangat menguntungkan bagi kami karena lebih murah biaya CODnya dan cashback super besar, uang bisa cair tiap hari dan mudah dipakainya.'
        }
      ]
    }
  }
}
</script>
