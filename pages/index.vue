<template>
  <div id="app" style="background-color: #f6f6f9; padding-bottom: 50px">
    <section id="home" style="background-color: #ffffff">
      <div class="register-now container">
        <div class="row">
          <div
            class="col-md-6 content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 class="title">
              Juaranya Platform Kirim Barang, Mudah dan Murah dengan
              <span style="color: #f95031">Komship</span>
            </h2>
            <p class="description">
              Dapatkan diskon ongkir mulai dari 25% dan GRATIS biaya retur
              se-Indonesia! Pelajari lebih lanjut untuk dapat tawaran menarik
            </p>
            <div class="info">
              <span class="number">{{ totalPartners }}+</span>
              <span class="label">Pebisnis online sudah bergabung dengan
                <span style="color: #f95031">Komship</span>
              </span>
            </div>
            <button
              class="btn btn-primary btn-register-now"
              @click="openWindow('https://partner.komerce.id/komship-register')"
            >
              Mulai Sekarang
            </button>
          </div>
          <div
            class="col-md-6 image-desktop"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img :src="require('@/assets/img/hero/new_hero.png')">
          </div>
        </div>
      </div>
    </section>
    <section id="service" class="service">
      <div class="container">
        <div class="row mb-4" data-aos="fade-up" data-aos-duration="1500">
          <div class="col-md-5 align-self-center">
            <h3 class="title">
              Sering kirim barang?
            </h3>
          </div>
          <div class="col-md-7 description">
            Sudah saatnya kamu beralih ke platform yang bisa memberikan berlipat
            keuntungan dan kenyamanan dalam melakukan pengiriman barang. Komship
            kini hadir untuk memudahkan pengiriman kamu dengan berbagai benefit
            TANPA MINIMUM JUMLAH PENGIRIMAN.
          </div>
        </div>
        <div class="row mt-5 service-desktop">
          <div
            v-for="item in service_items"
            :key="item.id"
            class="col-lg-4 col-md-6"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
          >
            <div class="card content">
              <div class="card-body">
                <img :src="item.image" class="icons"><br>
                <span class="title-content">{{ item.title }}</span>
                <p class="description-content">
                  {{ item.description }}
                  <string v-if="item.id === 5" style="color: #222222">
                    *S&K berlaku.
                  </string>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="service-mobile" data-aos="zoom-in" data-aos-duration="1500">
          <carousel :autoplay="2000" :wrap-around="true">
            <slide v-for="item in service_items" :key="item.id">
              <div class="card">
                <div class="card-body">
                  <img :src="item.image" class="icons"><br>
                  <span class="title-content">{{ item.title }}</span>
                  <p class="description">
                    {{ item.description }}
                    <string v-if="item.id === 5" style="color: #222222">
                      *S&K berlaku.
                    </string>
                  </p>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </section>
    <section class="benefit container">
      <div
        class="card benefit-head"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div class="card-body">
          <div class="row">
            <div class="col-lg-6 content">
              Kami telah bekerjasama dengan Ekspedisi ternama yang mendukung
              pengiriman <span style="color: #f95031">COD dan Non-COD</span>
            </div>
            <div class="col-lg-6 d-flex justify-between">
              <img
                class="logo"
                :src="require('@/assets/img/logo/logo_jne.png')"
              >
              <img
                class="logo"
                :src="require('@/assets/img/logo/logo_sicepat.png')"
              >
              <img
                class="logo"
                :src="require('@/assets/img/logo/logo_idexpress.png')"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="benefit-table-desktop">
        <div class="row" data-aos="fade-right" data-aos-duration="1500">
          <div class="col-md-3 p-4 head">
            Benefit
          </div>
          <div class="col-md-3 p-4 subhead">
            JNE
          </div>
          <div class="col-md-3 p-4 subhead">
            SiCepat
          </div>
          <div class="col-md-3 p-4 subhead">
            IDExpress
          </div>
        </div>
        <div class="row" data-aos="fade-right" data-aos-duration="1500">
          <div class="col-md-3 p-4 head">
            Diskon Ongkir
          </div>
          <div class="col-md-3 p-4">
            Reg 25%
          </div>
          <div class="col-md-3 p-4">
            <li class="list-benefit">
              Reg 30%
            </li>
            <li class="list-benefit">
              Cargo mulai dari 2.500/kg + diskon 5% (min. 10Kg)
            </li>
          </div>
          <div class="col-md-3 p-4">
            <li class="list-benefit">
              Reg 25% (>1/2 kg)
            </li>
            <li class="list-benefit">
              &lt;1/2 Kg bayar 1/2-nya * + diskon 15%
            </li>
          </div>
        </div>
        <div class="row" data-aos="fade-right" data-aos-duration="1500">
          <div class="col-md-3 p-4 head">
            Biaya COD
          </div>
          <div class="col-md-3 p-4">
            2.8%
            <div>(PPN ditanggung Komship)</div>
          </div>
          <div class="col-md-3 p-4">
            2.8%
            <div>(PPN ditanggung Komship)</div>
          </div>
          <div class="col-md-3 p-4">
            2.8%
            <div>(PPN ditanggung Komship)</div>
          </div>
        </div>
        <div class="row" data-aos="fade-right" data-aos-duration="1500">
          <div class="col-md-3 p-4 head">
            Biaya Retur
          </div>
          <div class="col-md-3 p-4">
            Gratis se-lndonesia*
          </div>
          <div class="col-md-3 p-4">
            Gratis se-lndonesia*
          </div>
          <div class="col-md-3 p-4">
            Gratis se-lndonesia*
          </div>
        </div>
      </div>
      <div class="benefit-table-mobile">
        <div
          class="mt-4 mb-2"
          style="text-align: left !important"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <button
            :class="benefitContent === 'JNE' ? 'active' : ''"
            class="btn btn-sm btn-menu"
            @click="benefitTabs('JNE')"
          >
            JNE
          </button>
          <button
            :class="benefitContent === 'SICEPAT' ? 'active' : ''"
            class="btn btn-sm btn-menu"
            @click="benefitTabs('SICEPAT')"
          >
            SiCepat
          </button>
          <button
            :class="benefitContent === 'IDEXPRESS' ? 'active' : ''"
            class="btn btn-sm btn-menu"
            @click="benefitTabs('IDEXPRESS')"
          >
            IDExpress
          </button>
        </div>
        <div class="row" data-aos="zoom-in" data-aos-duration="1500">
          <div class="col-6 p-3 head">
            Benefit
          </div>
          <div v-if="benefitContent === 'JNE'" class="col-6 p-3 subhead">
            JNE
          </div>
          <div v-if="benefitContent === 'SICEPAT'" class="col-6 p-3 subhead">
            SiCepat
          </div>
          <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 p-3 subhead">
            IDExpress
          </div>
        </div>
        <div class="row" data-aos="zoom-in" data-aos-duration="1500">
          <div class="col-6 p-3 head">
            Diskon Ongkir
          </div>
          <div v-if="benefitContent === 'JNE'" class="col-6 p-3">
            Reg 25%
          </div>
          <div v-if="benefitContent === 'SICEPAT'" class="col-6 p-3">
            <li class="list-benefit">
              Reg 30%
            </li>
            <li class="list-benefit">
              Cargo mulai dari 2.500/kg + diskon 5% (min. 10Kg)
            </li>
          </div>
          <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 p-3">
            <li class="list-benefit">
              Reg 25% (>1/2 kg)
            </li>
            <li class="list-benefit">
              &lt;1/2 Kg bayar 1/2-nya * + diskon 15%
            </li>
          </div>
        </div>
        <div class="row" data-aos="zoom-in" data-aos-duration="1500">
          <div class="col-6 p-3 head">
            Biaya COD
          </div>
          <div v-if="benefitContent === 'JNE'" class="col-6 p-3">
            2.8%
            <div>(PPN ditanggung Komship)</div>
          </div>
          <div v-if="benefitContent === 'SICEPAT'" class="col-6 p-3">
            2.8%
            <div>(PPN ditanggung Komship)</div>
          </div>
          <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 p-3">
            2.8%
            <div>(PPN ditanggung Komship)</div>
          </div>
        </div>
        <div class="row" data-aos="zoom-in" data-aos-duration="1500">
          <div class="col-6 p-3 head">
            Biaya Retur
          </div>
          <div v-if="benefitContent === 'JNE'" class="col-6 p-3">
            Gratis se-lndonesia*
          </div>
          <div v-if="benefitContent === 'SICEPAT'" class="col-6 p-3">
            Gratis se-lndonesia*
          </div>
          <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 p-3">
            Gratis se-lndonesia*
          </div>
        </div>
      </div>
      <span
        style="font-weight: 500"
        data-aos="fade-right"
        data-aos-duration="1500"
      >*S&K berlaku</span>
    </section>
    <section class="recommend mt-5">
      <div class="container">
        <h3
          class="d-block text-center mb-4"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Rekomendasi untuk Kamu
        </h3>
        <div class="row justify-content-center">
          <div
            class="col-lg-4 col-md-6"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <div class="card">
              <div class="image">
                <img src="@/assets/img/partials/jne-counter.png">
              </div>
              <span class="content">
                Makin tenang kirim orderan dengan
                <span style="color: #f95031">
                  gerai terbanyak dan cakupan terluas
                </span>
                di Indonesia
              </span>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <div class="card">
              <div class="image">
                <img src="@/assets/img/partials/sicepat-counter.png">
              </div>
              <span class="content">
                Makin <span style="color: #f95031">untung</span> dan
                <span style="color: #f95031">hemat</span> kirim orderan bahkan
                ke pelosok Indonesia. Kirim pakai
                <span style="color: #f95031">Cargo</span> gak kalah
                <span style="color: #f95031">hemat</span>nya!
              </span>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <div class="card">
              <div class="image">
                <img src="@/assets/img/partials/idexpress-counter.png">
              </div>
              <span class="content">
                <span style="color: #f95031">Cocok bagi pebisnis dengan paket ringan.</span>
                Kirim orderan makin hemat dan mantap
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="alur" class="flow pb-4">
      <div class="container">
        <h3 data-aos="fade-up" data-aos-duration="1500">
          Alur pengiriman menggunakan
          <span style="color: #f95031">Komship</span>
        </h3>
        <div class="content-desktop row justify-content-center">
          <div
            v-for="item in flow_items"
            :key="item.id"
            class="col-lg-3 col-md-4 col-sm-6 mb-2 px-0"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <div class="number">
              <span>{{ item.id }}</span>
            </div>
            <div class="image">
              <img :src="item.image">
            </div>
            <div class="description">
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
        <div class="content-mobile">
          <div v-for="item in flow_items" :key="item.id">
            <div
              v-if="item.id % 2 === 1"
              class="d-flex"
              data-aos="zoom-in-right"
              data-aos-duration="1500"
            >
              <div class="number-mobile">
                <span>{{ item.id }}</span>
              </div>
              <div class="image-mobile">
                <img :src="item.image">
              </div>
              <div class="description-mobile">
                <span>{{ item.title }}</span>
              </div>
            </div>
            <div
              v-else
              class="d-flex"
              data-aos="zoom-in-left"
              data-aos-duration="1500"
            >
              <div class="description-mobile">
                <span>{{ item.title }}</span>
              </div>
              <div class="image-mobile d-flex justify-content-end">
                <img :src="item.image">
              </div>
              <div class="number-mobile">
                <span>{{ item.id }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <section id="feature-mobile">
      <div class="feature-mobile container mb-5">
        <div class="head-feature-mobile text-center">
          <h2
            class="head-feature"
            style="font-family: Poppins; font-size: 24px; font-weight: 700"
          >
            Fitur
          </h2>
        </div>
        <div class="d-flex mb-5">
          <button
            id="div1"
            class="btn-feature m-2 active"
            type="button"
            style="display: block"
            @click="replace('mbl-tambahan', 'mbl-unggulan')"
          >
            Fitur Unggulan
          </button>
          <button
            id="div2"
            class="btn-feature px- m-2"
            type="button"
            style="display: block"
            @click="replace('mbl-unggulan', 'mbl-tambahan')"
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
    </section>
    <section class="conclusion justify-content-center">
      <div class="content py-5">
        <h3 data-aos="zoom-in-down" data-aos-duration="1500">
          Percayakan Pengiriman Orderanmu Pada Komship!
        </h3>
        <br>
        <button
          class="btn btn-primary btn-register-now"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          @click="openWindow('https://partner.komerce.id/komship-register')"
        >
          Daftar sekarang
        </button>
      </div>
    </section>
    <section id="conclusion-mobile" class="conclusion-mobile-right">
      <div class="conclusion-mobile-left">
        <div class="content-mobile">
          <h3
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            style="font-weight: 600; font-size:16px; important!"
          >
            Percayakan Pengiriman Orderanmu Pada Komship!
          </h3>
          <br>
          <button
            class="btn btn-register-now"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            style="font-weight: 500; font-size:16px; important!"
            @click="openWindow('https://partner.komerce.id/komship-register')"
          >
            Daftar sekarang
          </button>
        </div>
      </div>
    </section>
    <section class="testimoni" data-aos="fade-up" data-aos-duration="1500">
      <h3 class="title">
        <span style="color: #f95031">Komship</span> telah dipercaya oleh
        Pebisnis dan UMKM di Indonesia
      </h3>
      <div class="content-desktop">
        <carousel :items-to-show="2" :autoplay="3000" :wrap-around="true">
          <slide v-for="item in testimoni_items" :key="item.id">
            <div class="card carousel__item">
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
          </slide>
        </carousel>
      </div>
      <div class="content-mobile">
        <carousel :autoplay="3000" :wrap-around="true">
          <slide v-for="item in testimoni_items" :key="item.id">
            <div class="card carousel__item">
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
          </slide>
          <template #addons>
            <Navigation>
              <template #next>
                <img :src="require('@/assets/img/icons/arrow-right.svg')">
              </template>
              <template #prev>
                <img :src="require('@/assets/img/icons/arrow-left.svg')">
              </template>
            </Navigation>
          </template>
        </carousel>
      </div>
    </section>
    <!-- <section class="faq">
      <div class="container">
        <div class="header">
          <h2 class="header-title">
            FAQ
          </h2>
        </div>
        <div class="accordion">
          <div v-for="item in items" :key="item?.id" class="accordion-item">
            <h2 :id="'heading' + item?.id" class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse' + item?.id"
                aria-expanded="true"
                :aria-controls="'collapse' + item?.id"
              >
                <div class="item-header">
                  {{ item?.header }}
                </div>
              </button>
            </h2>
            <div
              :id="'collapse' + item?.id"
              class="accordion-collapse collapse"
              :aria-labelledby="'heading' + item?.id"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div v-for="items in item?.desc">
                  <div v-if="items?.subdesc">
                    <ul v-for="val in items?.data" style="margin-bottom: 1px">
                      <li
                        style="
                          list-style-type: disc !important;
                          margin-top: 1px !important;
                        "
                      >
                        {{ val }}
                      </li>
                    </ul>
                  </div>
                  <div v-else class="desc">
                    <span>{{ items === "" ? "&nbsp;" : items }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div
            v-for="item in items2"
            id="collapseExample"
            :key="item?.id"
            class="accordion-item collapse"
          >
            <h2 :id="'heading' + item?.id" class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse' + item?.id"
                aria-expanded="true"
                :aria-controls="'collapse' + item?.id"
              >
                <div class="item-header">
                  {{ item?.header }}
                </div>
              </button>
            </h2>
            <div
              :id="'collapse' + item?.id"
              class="accordion-collapse collapse"
              :aria-labelledby="'heading' + item?.id"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div v-for="items2 in item?.desc">
                  <div v-if="items2?.subdesc">
                    <ul v-for="val in items2?.data" style="margin-bottom: 1px">
                      <li
                        style="
                          list-style-type: disc !important;
                          margin-top: 1px !important;
                        "
                      >
                        {{ val }}
                      </li>
                    </ul>
                  </div>
                  <div v-else class="desc">
                    <span>{{ items2 === "" ? "&nbsp;" : items2 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="FAQ-button">
            <button
              class="accordion-button"
              style="width: 190px; background-color: #f9f9f9"
              data-bs-toggle="collapse"
              href="#collapseExample"
              type="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Lihat FAQ lainnya
            </button>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      totalPartners: null,
      benefitContent: 'JNE',
      service_items: [
        {
          id: 1,
          title: 'Terima Pembayaran COD Instan',
          image: require('@/assets/img/icons/bgwallet.png'),
          description:
            'Semua bisa COD di Komship. Otomatis dan tanpa ribet urus persyaratan kerjasama satu persatu ke ekspedisi.'
        },
        {
          id: 2,
          title: 'Pencairan Setiap Hari',
          image: require('@/assets/img/icons/calender.png'),
          description:
            'Kamu bisa tarik dana COD kapanpun karena pencairan dapat dilakukan setiap hari.'
        },
        {
          id: 3,
          title: 'Lebih Hemat',
          image: require('@/assets/img/icons/analyst-icon.png'),
          description:
            'Dapatkan diskon ongkos kirim MULAI dari 25% (Berlaku COD dan Non COD) lebih hemat dibandingkan yang lain.'
        },
        {
          id: 4,
          title: 'Biaya COD Termurah',
          image: require('@/assets/img/icons/empty-wallet1.png'),
          description: 'Biaya COD cuma 2,8%, Nggak pake mahal!'
        },
        {
          id: 5,
          title: 'Gratis Biaya Retur',
          image: require('@/assets/img/icons/rts-icon1.png'),
          description:
            'Khawatir kamu rugi karena retur pelanggan? Tenang, Komship bebas biaya retur atau pengembalian COD seluruh Indonesia.'
        },
        {
          id: 6,
          title: 'Gratis Jemput Paket',
          image: require('@/assets/img/icons/kendaraan.png'),
          description:
            'Cukup tunggu saja di rumah, kurir akan mendatangi lokasimu untuk mengambil paket TANPA MINIMUM ORDER.'
        }
      ],
      flow_items: [
        {
          id: 1,
          title: 'Order masuk dari pelanggan',
          image: require('@/assets/img/icons/alur-icon1.svg')
        },
        {
          id: 2,
          title: 'Seller menyiapkan orderan',
          image: require('@/assets/img/icons/alur-icon2.svg')
        },
        {
          id: 3,
          title: 'Seller memasukan data di dashboard Komship',
          image: require('@/assets/img/icons/alur-icon3.svg')
        },
        {
          id: 4,
          title: 'Ekspedisi menjemput barang ke lokasi seller',
          image: require('@/assets/img/icons/alur-icon4.svg')
        },
        {
          id: 5,
          title: 'Barang diterima pelanggan',
          image: require('@/assets/img/icons/alur-icon5.svg')
        },
        {
          id: 6,
          title: 'Non COD (selesai) / COD (uang diterima)',
          image: require('@/assets/img/icons/alur-icon6.svg')
        },
        {
          id: 7,
          title: 'Dana dicairkan',
          image: require('@/assets/img/icons/alur-icon7.svg')
        }
      ],
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
      ],
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
      ],
      items: [
        {
          id: '1',
          header: 'Apa itu Komship ?',
          desc: [
            'Komship merupakan platform layanan pengiriman untuk membantu kamu dalam pengiriman paket baik COD atau Non-COD tanpa minimum pengiriman.'
          ]
        },
        {
          id: '2',
          header: 'Bagaimana cara daftar Komship?',
          desc: [
            '1. Daftar di website Komship.com',
            '2. Klik tomblo Mulai Sekarang.',
            '3. Atau bisa langsung buka https://partner.komerce.id/komship-register.',
            '4. Isi form pendaftaran (Isi data yang diminta), Isi form pendaftaran (Isi data yang diminta), lalu centang kotak syarat dan ketentuan dibawahnya.',
            '5. Klik Daftar.',
            '6. Lakukan verifikasi dengan membuka email yang kamu pakai untuk registrasi',
            '7. Akun Komship siap dipakai.',
            '8. Selanjutnya, kamu tinggal melengkapi profil akun Komship kamu dengan data-data yang valid.'
          ]
        },
        {
          id: '3',
          header:
            'Apakah ada biaya retur di Komship? Jika ada, berapa biayanya?',
          desc: [
            'Biaya retur (Pengembelian COD) gratis se-Indonesia. Biaya yang di gratiskan mencakup ongkir pengembalian paket, pelanggan cukup membayar ongkir pengiriman di awal saja.'
          ]
        },
        {
          id: '4',
          header: 'Apakah ada diskon ongkir di Komship?',
          desc: [
            'Tentu saja ada, berikut diskon ongkir yang bisa kamu dapatkan dengan menggunakan Komship',
            {
              subdesc: 'afasfdasfasf',
              data: [
                'JNE Reg 25%.',
                'Si Cepat Reg 30%, Cargo mulai dari 2.500/kg + diskon 5% ( min. 10kg )',
                'ID Express Reg 25% ( >½ kg ), < ½ kg bayar ½-nya + diskon 15%'
              ]
            },
            '',
            'Contoh simulasi:',
            'Ongkir untuk ekspedisi JNE Reg yang dibayarkan oleh customer sebesar 20.000, 25% dari 20.000 adalah 5.000. Maka, kamu dapat diskon ongkir sebesar 5.000 rupiah.'
          ]
        },
        {
          id: '5',
          header: 'Apakah ada biaya administrasi bulanan ?',
          desc: [
            'Tidak, kamu bisa menggunakan Komship tanpa harus membayar biaya administrasi bulanan.'
          ]
        }
      ],
      items2: [
        {
          id: '6',
          header:
            'Apakah Komship akan me-nonaktifkan akun jika beberapa bulan tidak terpakai?',
          desc: [
            'Betul. Akun akan dinonaktifkan jika dalam waktu 30 hari tidak aktif.'
          ]
        },
        {
          id: '7',
          header: 'Apakah Komship bisa di gunakan bagi yang berjualan offline?',
          desc: [
            'Sangat Bisa. Selagi masih dalam ruang lingkup pengiriman paket orderan.'
          ]
        },
        {
          id: '8',
          header: 'Bisnis model apa sajakah yang cocok menggunakan Komship?',
          desc: [
            'Komship sangat cocok untuk kamu yang memiliki model bisnis seperti distributor, dropshipper, reseller, atau produsen.'
          ]
        },
        {
          id: '9',
          header:
            'Jika sudah bekerja sama dengan ekspedisi apakah bisa menggunakan Komship?',
          desc: [
            'Sangat Bisa. Yang terpenting kamu tidak mengirimkan paket yang sama antara dengan Komship dan Ekspedisi.'
          ]
        },
        {
          id: '10',
          header: 'Berapa biaya penanganan COD di Komship?',
          desc: [
            '',
            {
              subdesc: 'afasfdasfasf',
              data: [
                'Biaya penanganan COD di Komship sebesar 2.8% dari total harga+ongkir.'
              ]
            },
            '',
            'Contoh Simulasi:',
            'Total harga+ongkir yang dibayarkan oleh customer sebesar 250.000 rupiah, 2.8% dari 250.000 adalah 7.000 rupiah. Maka, biaya penanganan COD yang harus dibayarkan oleh customer sebesar 7.000 rupiah.'
          ]
        },
        {
          id: '11',
          header:
            'Dana COD akan cair maksimal berapa hari setelah barang diterima pembeli?',
          desc: ['Dana COD dapat langsung dicairkan setelah pesanan selesai.']
        }
      ]
    }
  },
  mounted () {
    this.countPartners()
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
    },
    benefitTabs (value) {
      this.benefitContent = value
    },
    countPartners () {
      fetch('https://app.komerce.id/api/homepage/komship/countPartners').then(async (res) => {
        const { data } = await res.json()
        this.totalPartners = data
      })
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

<style scoped>
h2 {
    font-size: 40px;
    font-weight: 700;
    font-family: 'Poppins';
}

h3 {
    font-size: 32px;
    font-weight: 700;
    font-family: 'Poppins';
}

.register-now {
    display: flex;
    width: 100%;
    padding-bottom: 5vw;
    scroll-margin-top: 70px;
    font-family: 'Poppins';
}

.register-now .image-desktop img {
    max-width: 100%;
}

.register-now .content {
    margin: auto 0;
}

.register-now .description {
    color: #828282;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    padding-top: 10px;
    font-family: 'Poppins';
}

.register-now .info {
    display: flex;
    margin: 15px 0;
    font-family: 'Poppins';
}

.register-now .info .number {
    font-size: 48px;
    font-weight: 600;
    color: #FE783A;
    font-family: 'Poppins';
    align-self: center;
}

.register-now .info .label {
    font-size: 20px;
    font-weight: 500;
    margin: 16px 0;
    margin-left: 20px;
    font-family: 'Poppins';
}

.register-now .btn-register-now {
    font-weight: 800;
    font-size: 16px;
    min-width: 231px;
    height: 60px;
    font-family: 'Poppins';
}

/* serviceYYY */

.service {
    padding-top: 5vw;
    background-color: #f8f9fa;
    scroll-margin-top: 70px;
}

.service-desktop {
    background: linear-gradient(90deg, #FF6A3A -20.91%, #FBA63C 85.49%);
    border-radius: 20px;
    padding: 80px 20px;
}

.service-mobile {
    display: none;
}

.service .title {
    display: flex;
    text-align: center;
    justify-content: center;
    font-family: 'Poppins';
}

.service .description {
    color: #828282;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    font-family: 'Poppins';
}

.service .content {
    border: none;
    border-radius: 10px;
    padding: 0 10px;
    min-height: 230px;
    margin-bottom: 50px;
    font-family: 'Poppins';
}

.service .title-content {
    font-size: 18px;
    font-weight: 600;
    font-family: 'Poppins';
}

.service .description-content {
    color: #828282;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 10px;
    font-family: 'Poppins';
}

.service .icons {
    width: 60px;
    height: 60px;
    position: relative;
    margin-top: -50px;
    margin-bottom: 10px;
    border-radius: 12px;
    background-color: transparent;
    -webkit-box-shadow: 2px 4px 5px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 4px 5px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 4px 5px -1px rgba(0, 0, 0, 0.75);
}

.benefit-head {
    position: relative;
    margin: 0 50px;
    margin-top: -50px;
    padding: 10px 20px;
    border-radius: 30px;
    border: none;
    font-family: 'Poppins';
}

.benefit .list-benefit::marker {
    color: #F95031;
    font-family: 'Poppins';
}

.benefit .logo {
    width: 120px;
    margin: auto;
}

.benefit .content {
    font-size: 18px;
    font-weight: 600;
    font-family: 'Poppins';
}

.benefit-table-desktop {
    margin-top: 50px;
    text-align: center;
    vertical-align: middle;
    font-weight: 500;
}

.benefit-table-desktop .row {
    border-radius: 12px;
    background-color: #ffffff;
    padding: 0;
    margin-bottom: 10px;
    overflow-x: hidden;
    font-family: 'Poppins';
}

.benefit-table-desktop .head {
    background-color: #FBA63C;
    font-family: 'Poppins';
    font-size: 20px;
}

.benefit-table-desktop .subhead {
    background-color: #FF6A3A;
    font-family: 'Poppins';
    font-size: 20px;
}

.benefit-table-mobile {
    display: none;
}

.benefit-table-mobile .btn-menu {
    width: auto;
    margin-right: 6px;
    color: #C2C2C2;
    background-color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 4px 12px;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Poppins';
}

.benefit-table-mobile .btn-menu:hover {
    opacity: 0.7;
}

.benefit-table-mobile .btn-menu:focus {
    box-shadow: unset;
}

.benefit-table-mobile .active {
    color: #FF6A3A;
    border: 1px solid #FF6A3A;
}

.recommend .card {
    border: none;
    background-color: transparent;
    overflow: hidden;
}

.recommend .card .image {
    height: 180px;
    display: flex;
}

.recommend .card img {
    margin-top: auto;
}

.recommend .card .content {
    background-color: #ffffff;
    padding: 20px;
    min-height: 100px;
    border-radius: 0px 0px 20px 20px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    font-family: 'Poppins';
}

.flow {
    background-color: #ffffff;
    margin-top: 20px;
}

.flow .content-mobile {
    display: none;
}

.flow h3 {
    max-width: 450px;
    padding: 30px 0;
    font-family: 'Poppins';
    letter-spacing: 0.7px;
}

.flow .number {
    width: 54px;
    height: 54px;
    background-color: #FFECE9;
    border: 1px solid #FF6A3A;
    border-radius: 50%;
    font-family: 'Poppins';
    padding-top: 1.5vh;
}

.flow .number span {
    font-size: 24px;
    color: #FF6A3A;
    display: block;
    text-align: center;
    margin-top: 6px;
    font-family: 'Poppins';
}

.flow .image {
    position: relative;
    margin-top: -54px;
    display: flex;
    justify-content: center;
}

.flow .image img {
    height: 200px;
    width: 200px;
}

.flow .description {
    display: flex;
    justify-content: center;
    font-family: 'Poppins';
}

.flow .description span {
    width: 200px;
    text-align: center;
    position: relative;
    font-weight: 500;
    font-size: 16px;
    color: #FF6A3A;
    font-family: 'Poppins';
}

.feature {
    padding: 20px 0;
}

.feature h3 {
    padding: 15px 0;
}

.feature .fitur {
    text-align: center;
}

.feature .content {
    width: 70%;
    margin: auto 0;
    z-index: 1;
    font-family: 'Poppins';
}

.feature .title {
    font-size: 18px;
    font-weight: 600;
    color: #F95031;
    font-family: 'Poppins';
}

.feature .description {
    font-size: 14px;
    font-family: 'Poppins';
}

.image-feature {
    position: absolute;
    top: 40px;
    width: 480px;
    margin-top: -5rem;
    height: auto;
    right: 0;
}

.btn-feature {
    padding: 8px;
    border: solid 1px #C2C2C2;
    color: #C2C2C2;
    font-weight: 500;
    border-radius: 8px;
}

.btn-feature:focus {
    border: solid 1px #F95031;
    color: #F95031;
}

.subhead-feature {
    font-weight: 600;
    font-size: 18px;
}

#arrow-btn:hover .arrow-feature {
    display: block;
    background-image: url("@/assets/img/icons/arrow-right-orange.svg");
}

.acc-feature:hover {
    color: #F95031;
}

#arrow-btn:focus .arrow-feature {
    display: block;
    background-image: url("@/assets/img/icons/arrow-right-orange.svg");
}

.acc-feature {
    border: none;
    background-color: #F6F6F9;
}

.acc-feature:focus {
    color: #F95031;
}

.arrow-feature {
    width: 3rem;
    height: 2rem;
    background-image: url("@/assets/img/icons/arrow-right-black.svg");
    background-repeat: no-repeat;
}

.image-feature-unggulan {
    text-align: -webkit-right;
}

.image-feature-unggulan img {
    max-width: 100%;
}

.conclusion {
    max-height: 275px;
    margin-top: 63px;
    display: flex;
    justify-content: space-between;
    background-color: #FCEBBE;
}

.conclusion .content {
    max-width: 630px;
    text-align: center;
    margin: auto 0;
    font-weight: 600;
    font-family: 'Poppins';
}

.conclusion .content .title {
    font-size: 32px;
    font-family: 'Poppins';
}

.conclusion .content .btn {
    font-weight: 600;
    font-size: 16px;
    padding: 16px 24px;
    font-family: 'Poppins';
}

.btn-check:focus+.btn-primary,
.btn-primary:focus {
    box-shadow: unset;
}

.conclusion .bg-model-left {
    position: relative;
    margin-top: -50px;
}

.conclusion .bg-model-right {
    position: relative;
    margin-top: -63px;
}

.testimoni .title {
    max-width: 624px;
    margin: 20px auto;
    margin-top: 50px;
    margin-bottom: 30px;
    text-align: center;
    font-family: 'Poppins';
}

.testimoni .card {
    width: 90%;
    border: none;
    border-radius: 20px;
    min-height: 230px;
    margin: 10px 0;
    font-family: 'Poppins';
}

.testimoni .card .head {
    background-color: #FF6A3A;
    border-radius: 20px 20px 0px 0px;
    height: 80px;
    display: flex;
}

.testimoni .card .head .profile {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ffffff;
    margin-left: 5%;
    margin-top: 20px;
}

.testimoni .card .head .profile img {
    width: 90px;
    height: 90px;
    margin-top: 5px;
}

.testimoni .card .content {
    padding: 30px 40px;
    margin-top: 15px;
    font-size: 16px;
    font-family: 'Poppins';
}

.testimoni .card .name {
    font-size: 20px;
    color: #ffffff;
    margin: auto 30px;
    padding-top: 10px;
    text-align: left;
    font-family: 'Poppins';
}

.testimoni .carousel__prev,
.testimoni .carousel__next {
    background-color: transparent;
}

.testimoni .carousel__prev {
    left: 23%;
}

.testimoni .carousel__next {
    right: 23%;
}

.testimoni .carousel__slide>.carousel__item {
    transform: scale(1);
    opacity: 0.5;
    transition: 0.5s;
}

.testimoni .carousel__slide--visible>.carousel__item {
    opacity: 1;
    transform: rotateY(0);
}

.testimoni .carousel__slide--next>.carousel__item {
    transform: scale(0.9) translate(-10px);
}

.testimoni .carousel__slide--prev>.carousel__item {
    transform: scale(0.9) translate(10px);
}

.testimoni .carousel__slide--active>.carousel__item {
    transform: scale(1.1);
}

.testimoni .content-mobile {
    display: none;
}

#feature-mobile {
    display: none;
}

#conclusion-mobile {
    display: none;
}

@media (max-width: 1199.98px) {
    .register-now .description {
        font-size: 16px;
    }

    .register-now .image-desktop {
        margin: auto 0;
    }

    .register-now .btn-register-now {
        font-weight: 700;
        font-size: 14px;
        min-width: 160px;
        height: 50px;
    }

    /* .service .description {
    font-size: 14px;
  } */
    .service .content {
        min-height: 255px;
    }

    .recommend .card .content {
        min-height: 140px;
    }

    .image-feature {
        width: 420px;
    }

    .benefit .content {
        margin-bottom: 20px;
    }

    .flow .description span {
        margin-left: 15%;
    }

    .flow .image {
        justify-content: end;
    }

    #feature-mobile {
        display: none;
    }

    #conclusion-mobile {
        display: none;
    }
}

@media (max-width: 991.98px) {
    h2 {
        font-size: 32px;
        font-weight: 600;
    }

    h3 {
        font-size: 28px;
        font-weight: 600;
    }

    .register-now .title {
        margin-top: 15px;
    }

    .register-now .info .number {
        font-size: 34px;
        /* font-weight: 600;
    color: #FE783A; */
    }

    .register-now .info .label {
        font-size: 14px;
        margin-left: 10px;
    }

    .register-now .description {
        font-size: 14px;
        width: 100%;
    }

    .service .content {
        min-height: 230px;
    }

    .image-feature {
        display: none;
    }

    .service .title {
        margin-top: 4vh;
    }

    .benefit-head {
        margin-left: 30px;
        margin-right: 30px;
    }

    .testimoni .card .content {
        padding: 30px;
        font-size: 14px;
    }

    .testimoni .card {
        min-height: 250px;
        margin: 20px 0;
    }

    .conclusion .bg-model-left {
        margin-top: 0;
        width: 150px;
    }

    .conclusion .bg-model-right {
        margin-top: 0;
        width: 200px;
    }

    #feature-mobile {
        display: none;
    }

    #conclusion-mobile {
        display: none;
    }
}

@media (max-width: 767.98px) {
    #feature-mobile {
        display: none;
    }

    h2 {
        font-size: 28px;
    }

    h3 {
        font-size: 26px;
    }

    .register-now .title {
        text-align: center;
    }

    .register-now .description {
        text-align: center;
    }

    .register-now .info {
        justify-content: center;
    }

    .register-now .btn-register-now {
        display: block;
        margin: 0 auto;
    }

    .register-now .image-desktop {
        margin-top: 20px;
    }

    .service-desktop {
        display: none;
    }

    .service-mobile {
        display: unset;
    }

    .service-mobile .carousel {
        background: linear-gradient(90deg, #FF6A3A -20.91%, #FBA63C 85.49%);
        border-radius: 10px;
    }

    .service-mobile .carousel .card {
        margin: 50px 20px;
        width: 100%;
        text-align: left;
        min-height: 180px;
        border-radius: 10px;
        padding: 0 10px;
    }

    .service-mobile .carousel .card .description {
        margin-top: 10px;
    }

    .service-mobile .carousel__prev,
    .service-mobile .carousel__next {
        background-color: transparent;
    }

    .service-mobile .carousel__prev {
        position: absolute;
        left: 45%;
        top: 92%;
    }

    .service-mobile .carousel__next {
        position: absolute;
        right: 45%;
        top: 92%;
    }

    .service .title {
        justify-content: start;
        margin: 10px 0;
    }

    .recommend .card .image {
        margin: 0 auto;
    }

    .recommend .card .content {
        max-width: 350px;
        margin: 0 auto;
    }

    .benefit-head {
        margin: 0;
        margin-top: 10px;
    }

    .benefit-table-desktop {
        display: none;
    }

    .benefit-table-mobile {
        display: unset;
        text-align: center;
        vertical-align: middle;
        font-weight: 500;
    }

    .benefit-table-mobile .row {
        border-radius: 12px;
        background-color: #ffffff;
        padding: 0;
        margin-bottom: 10px;
        overflow-x: hidden;
    }

    .benefit-table-mobile .head {
        background-color: #FBA63C;
    }

    .benefit-table-mobile .subhead {
        background-color: #FF6A3A;
    }

    .testimoni .content-desktop {
        display: none;
    }

    .testimoni .content-mobile {
        display: unset;
    }

    .testimoni .content-mobile .carousel__prev,
    .testimoni .content-mobile .carousel__next {
        border-radius: 15px;
    }

    .testimoni .content-mobile .carousel__prev {
        position: absolute;
        left: 40%;
        top: 110%;
    }

    .testimoni .content-mobile .carousel__next {
        position: absolute;
        right: 40%;
        top: 110%;
    }

    .testimoni .card .content {
        font-size: 12px;
    }

    .testimoni .card .name {
        font-size: 16px;
        margin-right: 0;
        margin-left: 20px;
    }

    .conclusion .bg-model-left {
        width: 100px;
    }

    .conclusion .bg-model-right {
        width: 150px;
    }

    .conclusion .content .btn {
        font-size: 14px;
        padding: 12px 18px;
    }

    #conclusion-mobile {
        display: none;
    }

}

@media (max-width: 575.98px) {
    .feature {
        display: none;
    }

    #feature-mobile {
        display: block;
    }

    .head-feature {
        padding-top: 40px;
    }

    .subhead-feature {
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 18px;
        color: #F95031;
    }

    .subhead-feature-mobile {
        align-self: center;
    }

    .content-feature {
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 14px;
    }

    h2 {
        font-size: 26px;
    }

    h3 {
        font-size: 24px;
    }

    .flow .content-desktop {
        display: none;
    }

    .flow .content-mobile {
        display: unset;
    }

    .flow .content-mobile .number-mobile {
        width: 34px;
        height: 34px;
        background-color: #FFECE9;
        border: 1px solid #FF6A3A;
        border-radius: 50%;
        padding-top: 1%;
    }

    .flow .content-mobile .number-mobile span {
        font-size: 18px;
        color: #FF6A3A;
        margin: 10px;
    }

    .flow .content-mobile .image-mobile {
        width: 50%;
    }

    .flow .content-mobile .image-mobile img {
        width: 90%;
    }

    .flow .content-mobile .description-mobile {
        font-size: 16px;
        font-weight: 600;
        padding: 10px;
        color: #FF6A3A;
        width: 50%;
        display: flex;
        align-items: center !important;
    }

    .conclusion h3 {
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 0;
    }

    .conclusion .content {
        padding: 15px;
    }

    .conclusion .bg-model-left {
        width: 80px;
    }

    .conclusion .bg-model-right {
        width: 110px;
    }

    .conclusion .content .btn {
        font-size: 14px;
        padding: 8px 14px;
    }

    .register-now .info {
        border-top: solid 2px #E2E2E2;
    }

    #conclusion-mobile {
        background-color: #FCEBBE;
        display: block;
        height: 180px;
        text-align: -webkit-center;
    }

    .conclusion-mobile-left {
        background-image: url("@/assets/img/hero/model-conclusion-mobile-left.png");
        background-repeat: no-repeat;
        background-position: bottom left;
        height: 180px;
    }

    .conclusion-mobile-right {
        background-image: url("@/assets/img/hero/model-conclusion-mobile-right.png");
        background-repeat: no-repeat;
        background-position: bottom right;
    }

    #conclusion-mobile .content-mobile {
        padding-top: 40px;
        width: 60%;
        text-align: -webkit-center;
        font-size: 16px;
    }

    .conclusion {
        display: none;
    }
}

@media (max-width: 480px) {
    h2 {
        font-size: 22px;
    }

    h3 {
        font-size: 20px;
    }

    .feature .title-content {
        font-size: 26px;
    }

    .service-mobile .carousel .card {
        min-height: 250px;
    }

    .conclusion h3 {
        font-size: 18px;
    }

    .conclusion .content .btn {
        font-size: 12px;
        padding: 10px 16px;
    }

    .benefit .logo {
        width: 70px;
    }
}

/* FAQ */

.faq {
    background-color: #f8f9fa;
    padding: 10vw 0;
    height: 100%;
    margin-top: 50px;
}

.faq .header {
    display: flex;
    justify-content: center;
    padding-bottom: 3vw;
}

.faq .header-title {
    font-size: 32px;
    font-weight: 700;
}

.faq .accordion-item {
    border-radius: 8px !important;
    border: 1px solid #e2e2e2 !important;
    margin-bottom: 10px;
}

.faq .accordion-button {
    border-radius: 8px !important;
    color: #f95031 !important;
}

.faq .item-header {
    width: 90%;
}

.faq .accordion-button::after {
    background-image: url("@/assets/img/icons/plus-icon.png");
}

.faq .accordion-button:not(.collapsed)::after {
    background-image: url("@/assets/img/icons/minus-icon.png");
    background-color: unset !important;
    border-color: unset !important;
    color: #f95031 !important;
    box-shadow: unset !important;
}

.faq .accordion-button:focus {
    border-color: unset !important;
    box-shadow: unset !important;
}

.faq .accordion-body {
    padding-top: 0 !important;
    font-size: 14px !important;
    line-height: 21px !important;
    margin-right: 18%;
    font-family: 'Poppins';
}

.faq .FAQ-button {
    text-align: -webkit-right;
}

.faq .accordion-button:not(.collapsed) {
    background-color: transparent;
    box-shadow: unset;
}
</style>
