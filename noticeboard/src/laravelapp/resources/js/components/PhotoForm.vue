<template>
    <div class="photo-form"
    v-show="value">

        <h2 class="title">
            Submit a Photo
        </h2>

        <form class="form">
            <input type="file" class="form__item">

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
    }
}
</script>