<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  },

  /* This watch is for letting the router know wich route it should say in the page title. */
  watch: {
        $route: {
            immediate: true,
            handler(to) {
                document.title = to.meta.title || 'Some Default Title';
            }
        },
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  flex :1; 
}
</style>
