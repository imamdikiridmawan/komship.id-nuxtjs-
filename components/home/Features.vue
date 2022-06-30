<template>
  <section id="feature" class="feature">
    <div id="accordion-feature" class="container accordion mt-4">
      <h3
        data-aos="fade-up"
        data-aos-duration="1500"
        style="font-size: 32px; text-align: -webkit-left; !important"
        class="fitur"
      >
        Fitur
      </h3>
      <div class="d-flex mb-5">
        <button
          id="div1"
          class="btn-feature m-2 active"
          type="button"
          style="display: block"
          @click="replace('div4', 'div3')"
        >
          Fitur Unggulan
        </button>
        <button
          id="div2"
          class="btn-feature px- m-2"
          type="button"
          style="display: block"
          @click="replace('div3', 'div4')"
        >
          Fitur Tambahan
        </button>
      </div>
      <div id="div3" style="display: block">
        <div class="row">
          <div class="col-xl-5 col-lg-5 col-md-5">
            <div @click="replace2('dataoto', 'kendala', 'order')">
              <button id="arrow-btn" class="acc-feature d-flex mb-3">
                <div class="subhead-feature">
                  Input Order Masal
                </div>
                <div class="arrow-feature mx-4" />
              </button>
              <p>
                Anti ribet untuk kamu yang harus input orderan cukup banyak
                setiap hari, Gak perlu lagi input data manual satu persatu.
              </p>
            </div>
            <div @click="replace2('order', 'kendala', 'dataoto')">
              <button id="arrow-btn" class="acc-feature d-flex mb-3">
                <div class="subhead-feature">
                  Tarik Data Otomatis dan Mudah
                </div>
                <div class="arrow-feature mx-4" />
              </button>
              <p>
                Data di dashboard akan semakin mudah kamu olah dengan
                memanfaatkan menu download. Kamu tinggal pilih klasifikasi
                data yang dibutuhkan.
              </p>
            </div>
            <div @click="replace2('order', 'dataoto', 'kendala')">
              <button id="arrow-btn" class="acc-feature d-flex mb-3">
                <div class="subhead-feature">
                  Pantau Kendala Pengiriman
                </div>
                <div class="arrow-feature mx-4" />
              </button>
              <p>
                Kendala pengiriman akan makin mudah dan cepat teratasi karena
                terhubung langsung dengan ekspedisi terkait.
              </p>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7 col-md-7 image-unggulan">
            <div
              id="order"
              class="image-feature-unggulan"
              style="display: block"
            >
              <img src="@/assets/img/background/bg-ordermasal.png">
            </div>
            <div
              id="dataoto"
              class="image-feature-unggulan"
              style="display: none"
            >
              <img src="@/assets/img/background/bg-dataorder.png">
            </div>
            <div
              id="kendala"
              class="image-feature-unggulan"
              style="display: none"
            >
              <img src="@/assets/img/background/bg-kendala.png">
            </div>
          </div>
        </div>
      </div>
      <div id="div4" style="display: none">
        <div class="col-lg-6 col-12">
          <div
            v-for="item in feature_items"
            :key="item.id"
            class="d-flex"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img :src="item.image" style="width: 30%">
            <div class="content">
              <span class="title">{{ item.title }}</span>
              <br>
              <span class="description">{{ item.description }}</span>
            </div>
          </div>
        </div>
        <img
          class="image-feature"
          data-aos="zoom-in"
          data-aos-duration="1500"
          :src="require('@/assets/img/background/bg-newfeature.png')"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features',
  props: {
    replace: {
      type: Function,
      required: true
    },
    replace2: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      feature_items: [
        {
          id: 1,
          title: 'Produk Terlaris',
          description:
            'Jika kamu memiliki produk dengan variasi yang berbeda, maka fitur produk terlaris ini dapat membantu kamu mengetahui produk mana yang menjadi best seller dalam kurun waktu 1 bulan atau 7 hari terakhir.',
          image: require('@/assets/img/partials/produk-terlaris.svg')
        },
        {
          id: 2,
          title: 'Customer Loyal',
          description:
            'Merupakan data Customer yang sering melakukan order kembali (repeat order). Dengan mengetahui Customer Loyal kita, maka proses orderan akan semakin cepat.',
          image: require('@/assets/img/partials/customer-loyal.svg')
        },
        {
          id: 3,
          title: 'Top Admin Order',
          description:
            'Fitur yang akan mempermudah para pebisnis memantau produktifitas para admin dengan melihat data akumulasi performa masing-masing admin yang ada. Makin mudah juga untuk mengambil keputusan seperti pemberian bonus dan meningkatkan semangat kerja para admin.',
          image: require('@/assets/img/partials/top-admin.svg')
        }
      ]
    }
  }
}
</script>
