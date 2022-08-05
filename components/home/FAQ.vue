/* eslint-disable quotes */
<template>
  <section id="faq" class="faq">
    <div class="container">
      <div class="header">
        <h2 class="header-title">
          FAQ
        </h2>
      </div>
      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header">
            <button v-b-toggle.accordion-1 class="accordion-button">
              <div class="item-header">
                Apa itu Komship ?
              </div>
            </button>
          </div>
          <b-collapse id="accordion-1" class="accordion-collapse">
            <div class="accordion-body">
              <p>
                Komship merupakan platform layanan pengiriman untuk membantu
                kamu dalam pengiriman paket baik COD atau Non-COD tanpa minimum
                pengiriman.
              </p>
            </div>
          </b-collapse>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <button v-b-toggle.accordion-2 class="accordion-button">
              <div class="item-header">
                Bagaimana cara daftar Komship?
              </div>
            </button>
          </div>
          <b-collapse id="accordion-2" class="accordion-collapse">
            <div class="accordion-body">
              <ol>
                <li>Daftar di website Komship.com</li>
                <li>Klik tomblo Mulai Sekarang.</li>
                <li>
                  Atau bisa langsung buka
                  https://partner.komerce.id/komship-register.
                </li>
                <li>
                  Isi form pendaftaran (Isi data yang diminta), Isi form
                  pendaftaran (Isi data yang diminta), lalu centang kotak syarat
                  dan ketentuan dibawahnya.
                </li>
                <li>Klik Daftar.</li>
                <li>
                  Lakukan verifikasi dengan membuka email yang kamu pakai untuk
                  registrasi
                </li>
                <li>Akun Komship siap dipakai.</li>
                <li>
                  Selanjutnya, kamu tinggal melengkapi profil akun Komship kamu
                  dengan data-data yang valid.
                </li>
              </ol>
            </div>
          </b-collapse>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <button v-b-toggle.accordion-3 class="accordion-button">
              <div class="item-header">
                Apakah ada biaya retur di Komship? Jika ada, berapa biayanya?
              </div>
            </button>
          </div>
          <b-collapse id="accordion-3" class="accordion-collapse">
            <div class="accordion-body">
              <p>
                Biaya retur (Pengembelian COD) gratis se-Indonesia. Biaya yang
                di gratiskan mencakup ongkir pengembalian paket, pelanggan cukup
                membayar ongkir pengiriman di awal saja.
              </p>
            </div>
          </b-collapse>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <button v-b-toggle.accordion-4 class="accordion-button">
              <div class="item-header">
                Apakah ada diskon ongkir di Komship?
              </div>
            </button>
          </div>
          <b-collapse id="accordion-4" class="accordion-collapse">
            <div class="accordion-body">
              <p>
                Tentu saja ada, berikut diskon ongkir yang bisa kamu dapatkan dengan menggunakan Komship
                <ul>
                  <li>JNE Reg 25%.</li>
                  <li>Si Cepat Reg 30%, Cargo mulai dari 2.500/kg + diskon 5% ( min. 10kg )</li>
                  <li>ID Express Reg 25% ( >½ kg ),  ½ kg bayar ½-nya + diskon 15%</li>
                </ul>
              </p>
              <div>Contoh simulasi:</div>
              <div>Ongkir untuk ekspedisi JNE Reg yang dibayarkan oleh customer sebesar 20.000, 25% dari 20.000 adalah 5.000. Maka, kamu dapat diskon ongkir sebesar 5.000 rupiah.</div>
            </div>
          </b-collapse>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <button v-b-toggle.accordion-5 class="accordion-button">
              <div class="item-header">
                Apakah ada biaya administrasi bulanan ?
              </div>
            </button>
          </div>
          <b-collapse id="accordion-5" class="accordion-collapse">
            <div class="accordion-body">
              <p>
                Tidak, kamu bisa menggunakan Komship tanpa harus membayar biaya administrasi bulanan.
              </p>
            </div>
          </b-collapse>
        </div>
        <b-collapse id="faq-button">
          <div class="accordion-item">
            <div class="accordion-header">
              <button v-b-toggle.accordion-6 class="accordion-button">
                <div class="item-header">
                  Apakah Komship akan me-nonaktifkan akun jika beberapa bulan tidak terpakai?
                </div>
              </button>
            </div>
            <b-collapse id="accordion-6" class="accordion-collapse">
              <div class="accordion-body">
                <p>
                  Betul. Akun akan dinonaktifkan jika dalam waktu 30 hari tidak aktif.
                </p>
              </div>
            </b-collapse>
          </div>
          <div class="accordion-item">
            <div class="accordion-header">
              <button v-b-toggle.accordion-7 class="accordion-button">
                <div class="item-header">
                  Apakah Komship bisa di gunakan bagi yang berjualan offline?
                </div>
              </button>
            </div>
            <b-collapse id="accordion-7" class="accordion-collapse">
              <div class="accordion-body">
                <p>
                  Sangat Bisa. Selagi masih dalam ruang lingkup pengiriman paket orderan.
                </p>
              </div>
            </b-collapse>
          </div>
          <div class="accordion-item">
            <div class="accordion-header">
              <button v-b-toggle.accordion-8 class="accordion-button">
                <div class="item-header">
                  Bisnis model apa sajakah yang cocok menggunakan Komship?
                </div>
              </button>
            </div>
            <b-collapse id="accordion-8" class="accordion-collapse">
              <div class="accordion-body">
                <p>
                  Komship sangat cocok untuk kamu yang memiliki model bisnis seperti distributor, dropshipper, reseller, atau produsen.
                </p>
              </div>
            </b-collapse>
          </div>
          <div class="accordion-item">
            <div class="accordion-header">
              <button v-b-toggle.accordion-9 class="accordion-button">
                <div class="item-header">
                  Jika sudah bekerja sama dengan ekspedisi apakah bisa menggunakan Komship?
                </div>
              </button>
            </div>
            <b-collapse id="accordion-9" class="accordion-collapse">
              <div class="accordion-body">
                <p>
                  Sangat Bisa. Yang terpenting kamu tidak mengirimkan paket yang sama antara dengan Komship dan Ekspedisi.
                </p>
              </div>
            </b-collapse>
          </div>
          <div class="accordion-item">
            <div class="accordion-header">
              <button v-b-toggle.accordion-10 class="accordion-button">
                <div class="item-header">
                  Berapa biaya penanganan COD di Komship?
                </div>
              </button>
            </div>
            <b-collapse id="accordion-10" class="accordion-collapse">
              <div class="accordion-body">
                <p>Biaya penanganan COD di Komship sebesar 2.8% dari total harga+ongkir.</p>
                <div>Contoh Simulasi:</div>
                <div>Total harga+ongkir yang dibayarkan oleh customer sebesar 250.000 rupiah, 2.8% dari 250.000 adalah 7.000 rupiah. Maka, biaya penanganan COD yang harus dibayarkan oleh customer sebesar 7.000 rupiah.</div>
              </div>
            </b-collapse>
          </div>
          <div class="accordion-item">
            <div class="accordion-header">
              <button v-b-toggle.accordion-11 class="accordion-button">
                <div class="item-header">
                  Dana COD akan cair maksimal berapa hari setelah barang diterima pembeli?
                </div>
              </button>
            </div>
            <b-collapse id="accordion-11" class="accordion-collapse">
              <div class="accordion-body">
                <p>
                  Dana COD dapat langsung dicairkan setelah pesanan selesai.
                </p>
              </div>
            </b-collapse>
          </div>
        </b-collapse>
        <div class="FAQ-button">
          <button
            v-b-toggle.faq-button
            class="accordion-button"
            style="width: 190px; background-color: #f9f9f9"
          >
            Lihat FAQ lainnya
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Faq'
}
</script>
