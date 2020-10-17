<template>
    <div>
        <header>
            Trello
        </header>

        <main>
            <p class="info-line">総数</p>
            <p>
            <a class="info-line">{{ totalListCount }} リスト</a>
            /
            <a class="info-line">{{ totalCardCount }} タスク</a>
            </p>
            <draggable
                class="list-index"
                :list="lists"
                @end="movingList"
                >

                <list v-for="(item, index) in lists"
                    v-bind:key="item.id"
                    :title="item.title"
                    :cards="item.cards"
                    :listIndex="index"
                    @change="movingCard"
                />
            <list-add />
            </draggable>
        </main>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import ListAdd from './ListAdd.vue'
import List from './List.vue'
import { mapState } from 'vuex'

export default {
    components: {
        draggable,
        ListAdd,
        List,
    },
    computed: {
        ...mapState([
            'lists'
        ]),
        totalCardCount() {
            return this.$store.getters.totalCardCount
        },
        totalListCount() {
            return this.$store.getters.totalListCount
        },
    },
    methods: {
        movingCard: function() {
            this.$store.dispatch('updateList', { lists: this.lists })
        },
        movingList: function() {
            this.$store.dispatch('updateList', { lists: this.lists })
        }
    }
}
</script>