<template>
    <div id="app">
    <top-back />
    <vue-header />
    <transition mode="out-in">
    <router-view />
    </transition>
    <vue-footer />
  </div>

  <!-- <v-app>
    <v-main>
      <ContactForm/>
    </v-main>
  </v-app> -->
</template>

<script>
import vueHeader from './view/header'
import vueFooter from './view/footer'
import topBack from './components/topBack'
// import ContactForm from './components/ContactForm'

export default {
  name: 'App',
  components: {
    vueHeader,
    vueFooter,
    topBack,
    // ContactForm
  },
}
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/style.css';
#app {
  text-align: center;
}
.v-leave-active, .v-enter-active {
  transition: opacity 1s, transform 1s;
}
.v-enter {
  transform: translateX(-100%);
  opacity: 0;
}
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.router-link-active {
  color: red;
}
</style>