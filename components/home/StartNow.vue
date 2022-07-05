<template>
  <section id="home" style="background-color: #ffffff; padding-top: 100px">
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
            <span class="number">{{ totalpartners }}+</span>
            <span class="label">Pebisnis online sudah bergabung dengan
              <span style="color: #f95031; font-weight: 600;">Komship</span>
            </span>
          </div>
          <button
            class="btn btn-primary btn-register-now"
            @click="openwindow('https://partner.komerce.id/komship-register')"
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
</template>

<script>

export default {
  name: 'StartNow',
  props: {
    openwindow: {
      type: Function,
      required: true
    },
    totalpartners: {
      type: String,
      required: true
    }
  }
}
</script>
