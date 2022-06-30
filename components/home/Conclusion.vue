<template>
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
        @click="openwindow('https://partner.komerce.id/komship-register')"
      >
        Daftar sekarang
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Conclusion',
  props: {
    openwindow: {
      type: Function,
      required: true
    }
  }
}
</script>
