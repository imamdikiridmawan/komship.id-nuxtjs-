<template>
  <div>
    <HomeNavbar />
    <Nuxt />
    <HomeFooter />
  </div>
</template>
<script>
import HomeNavbar from '../components/HomeNavbar.vue'
import HomeFooter from '../components/HomeFooter.vue'

export default {
  name: 'HomeLayout',
  components: { HomeNavbar, HomeFooter }
}
</script>
