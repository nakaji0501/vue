<template>
    <div class="list">
        <div class="listheader">
            <p class="list-title">{{ title }}</p>
            <p class="list-counter">
                total: {{ totalCardInList }}
            </p>
            <div class="deletelist"
                v-on:click="removeList">
                X
                </div>
        </div>

        <draggable group="cards"
            :list="cards"
            @end="$emit('change')"
        >
        <card v-for="(item, index) in cards"
            :body="item.body"
            :key="item.id"
            :cardIndex="index"
            :listIndex="listIndex"
        />
        <card-add :listIndex="listIndex" />
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import CardAdd from './CardAdd.vue'
import Card from './Card.vue'

export default {
    components: {
        draggable,
        CardAdd,
        Card,
    },
    props: {
        title: {
            type: String,
            required: true
        },
        cards: {
            type: Array,
            required: true
        },
        listIndex: {
            type: Number,
            required: true,
        },
    },
    computed: {
        totalCardInList() {
            return this.cards.length
        }
    },
    methods: {
        removeList: function() {
            if(confirm('削除しますか？')) {
                this.$store.dispatch('removelist', { listIndex: this.listIndex })
            }
        },
    }
}
</script>