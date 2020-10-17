<template>
    <form :class="classList"
        v-on:submit.prevent="addCardList">
        <input type="text"
            class="text-input"
            placeholder="本文追加"
            v-model="body"
            @focusin="startEditing"
            @focusout="finishEditing"
        >
        <button type="submit"
            class="add-button"
            v-if="isEditing || bodyExists">
            追加
        </button>
        </form>
</template>

<script>
export default {
    props: {
        listIndex: {
            type: Number,
            required: true,
        }
    },
    data: function() {
        return {
            body: '',
            isEditing: false,
        }
    },
    computed: {
        classList() {
            const classList = ['addcard']
            if(this.isEditing) {
                classList.push('active')
            }
            if(this.bodyExists) {
                classList.push('addable')
            }
            return classList
        },
        bodyExists() {
            return this.body.length > 0
        }
    },
    methods: {
        addCardList: function() {
            this.$store.dispatch('addCardList', { body: this.body, listIndex: this.listIndex })
            this.body = ''
        },
        startEditing: function() {
            this.isEditing = true
        },
        finishEditing() {
            this.isEditing = false
        },
    }
}
</script>