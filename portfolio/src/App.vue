<template>
  <div id="app">
    <top-back />
    <vue-header />
    <transition mode="out-in">
    <router-view />
    </transition>
    <vue-footer />
  </div>
</template>

<script>
import vueHeader from './components/header'
import vueFooter from './components/footer'
import topBack from './parts/topBack'

export default {
  name: 'App',
  components: {
    vueHeader,
    vueFooter,
    topBack,
  },
}
</script>

<style>
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
</style>
