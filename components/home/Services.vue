<template>
  <section id="service" class="service">
    <div class="container">
      <div class="row mb-4" data-aos="fade-up" data-aos-duration="1500">
        <div class="col-md-5 align-self-center">
          <h3 class="title">
            Sering kirim barang?
          </h3>
        </div>
        <div class="col-md-7 description">
          Sudah saatnya kamu beralih ke platform yang bisa memberikan berlipat keuntungan
          dan kenyamanan dalam melakukan pengiriman barang. Komship kini hadir untuk
          memudahkan pengiriman kamu dengan berbagai benefit TANPA MINIMUM JUMLAH
          PENGIRIMAN.
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data () {
    return {
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
      ]
    }
  }
}
</script>
