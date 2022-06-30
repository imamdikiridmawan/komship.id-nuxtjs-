<template>
  <div id="app" style="background-color: #f6f6f9; padding-bottom: 50px">
    <StartNow :openwindow="openWindow" :totalpartners="data" />
    <Services />
    <Benefit />
    <Recommend />
    <Flow />
    <Features
      :replace="replace"
      :replace2="replace2"
    />
    <FeatureMobile
      :replace="replace"
    />
    <Conclusion :openwindow="openWindow" />
    <ConclusionMobile :openwindow="openWindow" />
    <Testimoni />
    <FAQ />
  </div>
</template>

<script>
import StartNow from '../components/home/StartNow.vue'
import Services from '../components/home/Services.vue'
import Benefit from '../components/home/Benefit.vue'
import Recommend from '../components/home/Recomend.vue'
import Flow from '../components/home/Flow.vue'
import Features from '../components/home/Features.vue'
import FeatureMobile from '../components/home/FeatureMobile.vue'
import Conclusion from '../components/home/Conclusion.vue'
import ConclusionMobile from '../components/home/ConclusionMobile.vue'
import Testimoni from '../components/home/Testimoni.vue'
import FAQ from '../components/home/FAQ.vue'

export default {
  components: {
    StartNow,
    Services,
    Benefit,
    Recommend,
    Flow,
    Features,
    FeatureMobile,
    Conclusion,
    ConclusionMobile,
    Testimoni,
    FAQ
  },
  async asyncData ({ $axios }) {
    const { data } = await $axios.$get('https://app.komerce.id/api/homepage/komship/countPartners')
    return {
      data
    }
  },
  methods: {
    getAsyncData () {
      const self = this
      window.setTimeout(function () {
        self.title = 'My async title'
        self.$emit('updateHead')
      }, 3000)
    },
    openWindow (url) {
      window.open(url)
    },
    replace (hide, show) {
      document.getElementById(hide).style.display = 'none'
      document.getElementById(show).style.display = 'block'
    },
    replace2 (hide, hide2, show) {
      document.getElementById(hide).style.display = 'none'
      document.getElementById(hide2).style.display = 'none'
      document.getElementById(show).style.display = 'block'
    }
  }
}
</script>

<style src="../components/home/Home.css"/>
