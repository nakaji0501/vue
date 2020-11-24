<template>
    <router-link
    :to="path">
    <div
    class="contactButton">
        <a class="btn">
            お問い合わせはこちら
        </a>
    </div>
    </router-link>
</template>

<script>
export default {
  data() {
    return {
      name: 'contactButton',
      path: '/contactForm',
    }
  }
}
</script>

<style scoped>
.btn {
  color: #fff;
  background-color: rgb(11, 71, 139);
  padding: 1.5rem 2rem 1.5rem 2rem;
}

.btn:hover {
  color: #fff;
  background: #2aafe4;
}
</style>