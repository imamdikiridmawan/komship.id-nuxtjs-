/* eslint-disable vue/require-v-for-key */
<template>
  <section class="faq">
    <div class="container">
      <div class="header">
        <h2 class="header-title">
          FAQ
        </h2>
      </div>
      <div class="accordion">
        <div v-for="item in items" :key="item.id" class="accordion-item">
          <h2 :id="'heading' + item.id" class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + item.id"
              aria-expanded="true"
              :aria-controls="'collapse' + item.id"
            >
              <div class="item-header">
                {{ item.header }}
              </div>
            </button>
          </h2>
          <div
            :id="'collapse' + item.id"
            class="accordion-collapse collapse"
            :aria-labelledby="'heading' + item.id"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" />
          </div>
        </div>
      </div>
      <div class="accordion">
        <div
          v-for="item in items2"
          id="collapseExample"
          :key="item.id"
          class="accordion-item collapse"
        >
          <h2 :id="'heading' + item.id" class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + item.id"
              aria-expanded="true"
              :aria-controls="'collapse' + item.id"
            >
              <div class="item-header">
                {{ item.header }}
              </div>
            </button>
          </h2>

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
    </div>
  </section>
</template>

<script>
export default {
  name: 'Faq',
  data () {
    return {
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
  }
}
</script>
