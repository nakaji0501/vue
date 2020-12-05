<template>
    <div class="pagination">

        <router-link
        v-if="! isFirstPage"
        :to="`/?page=${currentPage - 1}`"
        class="button"
        >
        &laquo; prev
        </router-link>

        <router-link
        v-if="! isLastPage"
        :to="`/?page=${currentPage + 1}`"
        class="button"
        >
        next &raquo;
        </router-link>

    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        lastPage: {
            type: Number,
            required: true
        },
    },
    computed: {
        isFirstPage() {
            return this.currentPage === 1
        },
        isLastPage() {
            return this.currentPage === this.lastPage
        },
    },
}
</script>