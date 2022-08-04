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
            Dapatkan diskon ongkir <span style="color:black; font-weight: 600;">mulai dari 25%</span> dan
            <span style="color:black; font-weight: 600;">GRATIS biaya retur se-Indonesia!</span> &nbsp;Pelajari lebih lanjut untuk dapat tawaran menarik
          </p>
          <div class="info">
            <span class="number">{{ totalpartners }}+</span>
            <span class="label">Pebisnis online sudah bergabung dengan
              <span style="color: #f95031; font-weight: 500;">Komship</span>
            </span>
          </div>
          <div class="button-komponen">
            <a href="#toconclusion">
              <button type="button" class="btn btn-1 btn-outline-primary" style="font-weight: 600">
                Mulai Sekarang
              </button>
            </a>
          </div>
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
