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
import { mapState, magGetters } from 'vuex'

export default {
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')

      if (this.apiStatus) {
        this.$router.push('/login')
      }
    }
  },
  computed: {
    ...mapState({
      apiStatus: state => state.auth.apiStatus
    }),
    ...mapGetters({
      isLogin: 'auth/check'
    })
  },
}
</script>