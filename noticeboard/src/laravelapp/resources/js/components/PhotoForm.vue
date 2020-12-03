<template>
    <div class="photo-form"
    v-show="value">

        <h2 class="title">
            Submit a Photo
        </h2>

        <form class="form">
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
export default {
    props: {
        value: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            preview: null
        }
    },
    methods: {
        onFileChange(event) {
            if (event.target.files.length === 0) {
                return false
            }

            if (! event.target.files[0].type.match('image.*')) {
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
        },
    }
}
</script>