<template>
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
</template>

<script>
export default {
  name: 'Benefit',
  data () {
    return {
      benefitContent: 'JNE'
    }
  },
  methods: {
    benefitTabs (value) {
      this.benefitContent = value
    }
  }
}
</script>
