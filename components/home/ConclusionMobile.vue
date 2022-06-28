<template>
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
          @click="openwindow('https://partner.komerce.id/komship-register')"
        >
          Daftar sekarang
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ConclusionMobile',
  props: {
    openwindow: {
      type: Function,
      required: true
    }
  }
}
</script>
