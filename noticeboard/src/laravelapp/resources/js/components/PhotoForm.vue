<template>
    <div class="photo-form"
    v-show="value">

        <h2 class="title">
            Submit a Photo
        </h2>

        <form class="form"
        @submit.prevent="submit">

        <div class="errors"
        v-if="errors">
            <ul v-if="errors.photo">
                <li v-for="msg in errors.photo"
                :key="msg">
                {{ mag }}
                </li>
            </ul>
        </div>

            <input type="file" class="form__item"
            @change="onFileChange">

            <output class="form__output"
            v-if="preview">
                <img src="preview" alt="">
            </output>

            <div class="form__button">
                <button class="button button--inverse">
                    submit
                </button>
            </div>

        </form>
    </div>
</template>

<script>
import { CREATED, UNPROCESSABLE_ENTITY } from '../util'
export default {
    props: {
        value: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            preview: null,
            photo: null,
            errors: null,
        }
    },
    methods: {
        onFileChange(event) {
            if (event.target.files.length === 0) {
                this.reset()
                return false
            }

            if (! event.target.files[0].type.match('image.*')) {
                this.reset()
                return false
            }

            const reader = new FileReader()

            reader.onload = e => {
            // previewに読み込み結果（データURL）を代入する
            // previewに値が入ると<output>につけたv-ifがtrueと判定される
            // また<output>内部の<img>のsrc属性はpreviewの値を参照しているので
            // 結果として画像が表示される
                this.preview = e.target.result
            }

            reader.readAsDataURL(event.target.files[0])
            this.photo = event.target.files[0]
        },

        reset() {
            this.preview = ""
            this.photo = null
            // this.$elはコンポーネントのDOM要素を表す
            this.$el.queryselector('input[type="file"]').value = null
        },

        async submit() {
            const formData = new FormData()
            formData.append('photo', this.photo)
            const response = await axios.post('/api/photos', formData)

            // バリデーションエラーは値のクリアやフォーム閉じるの前にfalseを返す
            if (response.status === UNPROCESSABLE_ENTITY) {
                this.errors = response.data.errors
                return false
            }

            this.reset()
            this.#emit('input', false)

            if (response.status !== CREATED) {
                this.$store.commit('error/setCode', response.status)
                return false
            }

            this.$router.push('/photos/${response.data.id}')
        }
    }
}
</script>