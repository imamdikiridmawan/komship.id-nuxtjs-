<template>
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
</template>

<script>
export default {
  name: 'Flow',
  data () {
    return {
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
      ]
    }
  }
}
</script>
