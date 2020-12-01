<template>
  <footer class="footer">

    <button class="button button--link"
    @click="logout"
    v-if="isLogin">
    Logout
    </button>

    <RouterLink class="button button--link"
    to="/login"
    v-else>
      Login / Register
    </RouterLink>

  </footer>
</template>

<script>
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters['auth/check']
    }
  },
}
</script>