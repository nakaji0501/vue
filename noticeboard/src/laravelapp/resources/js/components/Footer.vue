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
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      apiStatus: state => state.auth.apiStatus
    }),
    ...mapGetters({
      isLogin: 'auth/check'
    })
  },
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')

      if (this.apiStatus) {
        this.$router.push('/login')
      }
    }
  },
}
</script>