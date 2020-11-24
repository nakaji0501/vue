<template>
    <div class="textAnime">
        <span
        v-for="(t, index) in text"
        :key="index"
        v-text="t"
        :style="{animationDelay: index * 50 + 'ms'}"
        class="text-anim"
        />
    </div>
</template>

<script>
export default {
    data() {
      return {
        text: 'Wellcom to VueFolio !'
      }
    },
}
</script>

<style scoped>
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.text-anim {
  line-height: 3rem;
  display: inline-block;
  min-width: 0.3em;
  font-size: 2rem;
  animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
</style>