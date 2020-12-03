<template>
    <nav class="navbar">

        <router-link class="navbar__brand"
        to="/">
        NOTICEBOARD
        </router-link>

        <div class="navbar__menu">
            <div class="navbar__item"
            v-if="isLogin">
                <button class="button"
                @click="showForm = !showForm">
                    <i class="icon ion-md-add"></i>
                    Submit a Photo
                </button>
            </div>

            <span class="navbar__item"
            v-if="isLogin">
                {{ username }}
            </span>

            <div class="navbar__item"
            v-else>
                <router-link class="button button--link"
                to="/login">
                Login / Register
                </router-link>
            </div>

        </div>

        <PhotoForm v-model="showForm" />

    </nav>
</template>

<script>
import PhotoForm from './PhotoForm.vue'
export default {
    components: {
        PhotoForm,
    },
    data() {
        return {
            showForm: false,
        }
    },
    computed: {
        isLogin() {
            return this.$store.getters['auth/check']
        },
        username() {
            return this.$store.getters['auth/username']
        }
    }
}
</script>