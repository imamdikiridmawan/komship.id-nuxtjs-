/* eslint-disable prettier/prettier */
<template>
  <footer style="background-color: #ffffff">
    <div class="container">
      <div class="col-md-12">
        <div class="row container">
          <div class="col-lg-6 col-md-8 profile">
            <router-link to="/">
              <img
                :src="require('@/assets/img/logo/new-logo.svg')"
                alt="logo komship"
                class="profile-image"
              >
            </router-link>
            <div class="row">
              <div class="col-1" style="padding-right: 0px">
                <img
                  :src="require('@/assets/img/icons/location-icon.png')"
                  alt="location icon"
                  max-width="30px"
                  min-width="25px"
                >
              </div>
              <div class="col-11">
                Head Office Komerce
              </div>
              <div class="col-10 offset-1">
                Jln. Sawah Tengah No. 3 Desa Tunjungmuli Kecamatan Karangmoncol
                Kabupaten Purbalingga (53355)
              </div>
            </div>
            <div class="row">
              <div class="col-1" style="padding-right: 0px">
                <img
                  :src="require('@/assets/img/icons/email-icon.png')"
                  alt="email icon"
                  max-width="30px"
                  min-width="20px"
                >
              </div>
              <div class="col-11">
                bd@komship.id
              </div>
            </div>
            <div class="row">
              <div class="col-1">
                <img
                  :src="require('@/assets/img/icons/call-icon.png')"
                  alt="call icon"
                  max-width="30px"
                  min-width="20px"
                >
              </div>
              <div class="col-11">
                081328014170
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 company">
            <h3 class="company-title">
              Perusahaan
            </h3>
            <ul class="company-link">
              <li>
                <router-link to="about" @click="resetNavBarActive()">
                  Tentang Kami
                </router-link>
              </li>
              <li>
                <router-link to="terms" @click="resetNavBarActive()">
                  Syarat &amp; Ketentuan
                </router-link>
              </li>
              <li>
                <router-link to="privacy" @click="resetNavBarActive()">
                  Kebijakan privasi
                </router-link>
              </li>
              <li>
                <a :href="getLink()" rel="noopener noreferrer" @click="resetNavBarActive()">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-8 col-12 partner">
            <h3 class="partner-title mb-4">
              Kerjasama Ekspedisi
            </h3>
            <div class="image-partner">
              <img
                :src="require('@/assets/img/logo/logo_jne.png')"
                alt="logo jne"
                class="image-partner-img"
                style="widht=109px"
              >
              <img
                :src="require('@/assets/img/logo/Sicepat_logo.png')"
                alt="logo jne"
                class="image-partner-img"
                style="widht=139px"
              >
              <img
                :src="require('@/assets/img/logo/id_express_logo.png')"
                alt="logo jne"
                class="image-partner-img"
                style="widht=139px"
              >
            </div>
          </div>
        </div>
        <div class="contact d-flex justify-content-between">
          <div class="copyright">
            Copyright 2022 Komship.id. All rights reserved.
          </div>
          <div>
            <img
              :src="require('@/assets/img/icons/whatsapp-icon.png')"
              alt="whatsapp icon"
              class="ml-3"
              @click="openLink('https://wa.me/6281328014170')"
            >
            <img
              :src="require('@/assets/img/icons/instagram-icon.png')"
              alt="instagram icon"
              class="ml-3"
              @click="openLink('https://instagram.com/komship')"
            >
            <img
              :src="require('@/assets/img/icons/facebook-icon.png')"
              alt="facebook icon"
              class="ml-3"
              @click="openLink('https://www.facebook.com/komship')"
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    getLink () {
      // const routes = this.$route.path.split('/')
      // if (process.client) {
      //   console.log(window.location.origin)
      //   let link = ''
      //   console.log(routes)
      //   if (routes[1] !== '') {
      //     link = window.location.origin
      //   } else {
      //   // link = '/' + '#faq'
      //   }
      if (process.client) {
        return window.location.origin + '#faq'
      }
    },
    openLink (link) {
      window.open(link)
    },
    resetNavBarActive () {
      document.getElementById('navmenuhome').classList.remove('active')
      document.getElementById('navmenuservice').classList.remove('active')
      document.getElementById('navmenualur').classList.remove('active')
      document.getElementById('navmenufitur').classList.remove('active')
    }
  }
}
</script>
<style src="./HomeFooter.css"/>
