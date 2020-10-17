import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    lists: savedLists ? JSON.parse(savedLists): [
      {
        title: 'backlog',
        cards: [
          { body: 'English'},
          { body: 'Mathematics'},
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science'}
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards: [] })
    },
    removelist(state, payload) {
      state.lists.splice(payload.listindex, 1)
    },
    addCardList(state, payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body })
    },
    removeCardList(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
    updateList(state, payload) {
      state.lists = payload.lists
    },
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
    addCardList(context, payload) {
      context.commit('addCardList', payload)
    },
    removeCardList(context, payload) {
      context.commit('removeCardList', payload)
    },
    updateList(content, payload) {
      content.commit('updateList', payload)
    },
  },
  getters: {
    totalCardCount(state) {
      let count = 0
      state.lists.map(content => count += content.cards.length)
      return count
    },
    totalListCount: state => {
      return state.lists.length
    }
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store