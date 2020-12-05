<template>
    <div class="photo-detail"
    v-if="photo"
    :class="{ 'photo-detail--column': fullWidth }"
    >

        <figure class="photo-detail__pane photo-detail__image"
        @click="fullWidth = ! fullWidth"
        >
            <img src="photo.url" alt="">
            <figcaption>Posted by {{ photo.owner.name }}</figcaption>
        </figure>

        <div class="photo-detail__pane">
            <button class="button button--like"
            title="Like photo">
                <i class="icon ion-md-heart"></i>12
            </button>

            <a :href="`/photos/${photo.id}/download`"
            class="butto"
            title="Download photo"
            >
                <i class="icon ion-md-arrow-round-down"></i>Download
            </a>

            <h2 class="photo-detail__title">
                <i class="icon ion-md-chatboxes"></i>Comments
            </h2>

            <form class="form"
            @submit.prevent="addComment"
            v-if="isLogin"
            >

                <div class="erros"
                v-if="commentErrors">
                    <ul v-if="commentErrors.content">
                        <li
                        v-for="msg in commentErrors.content"
                        :key="msg"
                        >
                        {{ msg }}
                        </li>
                    </ul>
                </div>

                <textarea class="form__item"
                v-model="commentContent"></textarea>

                <div class="form__button">
                    <button class="button button--inverse" type="submit">
                        submit comment
                    </button>
                </div>

            </form>

        </div>
    </div>
</template>

<script>
import { OK, CREATED, UNPROCESSABLE_ENTITY } from '../util'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            photo: null,
            fullWidth: false,
            commentContent: '',
            commentErrors: null,
        }
    },
    methods: {
        async fetchPhoto() {
            const response = await axios.get(`/api/photos/${this.id}`)

            if (response.status !== OK) {
                this.$store.commit('error/setCode', response.status)
                return false
            }
            this.photo = response.data
        },
        async addComment() {
            const response = await axios.post(`/api/photos/${this.id}/comments`, {
                content: this.comentContent
            })

            // バリデーションエラー
            if (response.status === UNPROCESSABLE_ENTITY) {
                this.commentErrors = response.data.errors
                return false
            }

            this.commentContent = ''
            this.commentErrors = null

            // その他のエラー
            if (response.status !== CREATED) {
                this.$store.commit('error/setCode', response.status)
                return false
            }
        }
    },
    computed: {
        isLogin() {
            return this.$store.getters('auth/check')
        },
    },
    watch: {
        $route: {
            async handore() {
                await this.fetchPhoto()
            },
            immediate: true
        }
    }
}
</script>