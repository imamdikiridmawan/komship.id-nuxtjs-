<template>
  <section id="feature-mobile">
    <div class="feature-mobile container mb-5">
      <div class="head-feature-mobile text-center">
        <h2
          class="head-feature"
          style="font-family: Poppins; font-weight: 700; font-size: 24px; font-weight: 700"
        >
          Fitur
        </h2>
      </div>
      <div class="d-flex mb-5">
        <button
          id="div1"
          class="btn-feature m-2"
          :class="isActive === 'btn1' ? 'actived': ''"
          type="button"
          style="display: block"
          @click="replace('mbl-tambahan', 'mbl-unggulan'); onActive('btn1')"
        >
          Fitur Unggulan
        </button>
        <button
          id="div2"
          class="btn-feature px- m-2"
          :class="isActive === 'btn2' ? 'actived': ''"
          type="button"
          style="display: block"
          @click="replace('mbl-unggulan', 'mbl-tambahan'); onActive('btn2')"
        >
          Fitur Tambahan
        </button>
      </div>
      <div id="mbl-unggulan" style="display: block">
        <div class="row justify-content-between mb-3">
          <div class="col-6 text-left icon-newfeature">
            <img
              src="@/assets/img/background/mbl-order.svg"
              alt="produk terlaris"
            >
          </div>
          <div class="col-6 text-right subhead-feature-mobile">
            <div class="subhead-feature">
              Input Order Masal
            </div>
          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-11">
              <div class="content-feature">
                Jika kamu memiliki produk dengan variasi yang berbeda, maka
                fitur produk terlaris ini dapat membantu kamu mengetahui
                produk mana yang menjadi best seller dalam kurun waktu 1 bulan
                atau 7 hari terakhir.
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between mb-3">
          <div class="col-6 text-left subhead-feature-mobile">
            <div class="subhead-feature" style="padding-left: 20px">
              Tarik Data Otomatis dan Mudah
            </div>
          </div>
          <div class="col-6 text-right icon-newfeature">
            <img
              src="@/assets/img/background/mbl-dataoto.svg"
              alt="customer loyal"
            >
          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-11">
              <div class="content-feature">
                Data di dashboard akan semakin mudah kamu olah dengan
                memanfaatkan menu download. Kamu tinggal pilih klasifikasi
                data yang dibutuhkan.
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between mb-3">
          <div class="col-6 text-left icon-newfeature">
            <img
              src="@/assets/img/background/mbl-kendala.svg"
              alt="top admin order"
            >
          </div>
          <div class="col-6 text-right subhead-feature-mobile">
            <div class="subhead-feature">
              Pantau Kendala Pengiriman
            </div>
          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-11">
              <div class="content-feature">
                Kendala pengiriman akan makin mudah dan cepat teratasi karena
                terhubung langsung dengan ekspedisi terkait.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mbl-tambahan" style="display: none">
        <div class="row justify-content-between mb-3">
          <div class="col-6 text-left icon-newfeature">
            <img
              src="@/assets/img/partials/produk-terlaris.svg"
              alt="produk terlaris"
            >
          </div>
          <div class="col-6 text-right subhead-feature-mobile">
            <div class="subhead-feature">
              Produk Terlaris
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-11">
              <div class="content-feature">
                Jika kamu memiliki produk dengan variasi yang berbeda, maka
                fitur produk terlaris ini dapat membantu kamu mengetahui
                produk mana yang menjadi best seller dalam kurun waktu 1 bulan
                atau 7 hari terakhir.
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between mb-3">
          <div class="col-6 text-left subhead-feature-mobile">
            <div class="subhead-feature" style="padding-left: 20px">
              Customer Loyal
            </div>
          </div>
          <div class="col-6 text-right icon-newfeature">
            <img
              src="@/assets/img/partials/customer-loyal.svg"
              alt="customer loyal"
            >
          </div>
          <div class="row justify-content-center">
            <div class="col-11">
              <div class="content-feature">
                Merupakan data Customer yang sering melakukan order kembali
                (repeat order). Dengan mengetahui Customer Loyal kita, maka
                proses orderan akan semakin cepat.
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between mb-3">
          <div class="col-6 text-left icon-newfeature">
            <img
              src="@/assets/img/partials/top-admin.svg"
              alt="top admin order"
            >
          </div>
          <div class="col-6 text-right subhead-feature-mobile">
            <div class="subhead-feature">
              Top Admin Order
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-11">
              <div class="content-feature">
                Fitur yang akan mempermudah para pebisnis memantau
                produktifitas para admin dengan melihat data akumulasi
                performa masing-masing admin yang ada. Makin mudah juga untuk
                mengambil keputusan seperti pemberian bonus dan meningkatkan
                semangat kerja para admin.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="conclusion" />
  </section>
</template>

<script>
export default {
  name: 'FeatureMobile',
  props: {
    replace: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      isActive: 'btn1'
    }
  },
  methods: {
    onActive (str) {
      this.isActive = str
    }
  }
}
</script>
