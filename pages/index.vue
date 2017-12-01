<template>
  <div class="pa4 f3">
    <h1 class="f2 bold center mw6">Makati Med Articles</h1>
    <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
      <li v-for="todo of todos" :key="todo.id" class="ph3 pv3 bb b--light-silver">
        {{todo.title.rendered}}
      </li>
    </ul>
  </div>
</template>


<script>
import {mapState, mapMutations} from 'vuex'
import axios from 'axios'

export default {
  async fetch({store, redirect}){
    try {
      const response = await axios.get('http://makatimedicalsociety.org/wp-json/wp/v2/posts')
      store.commit('init', response.data)
    } catch(error) {
      redirect('/error')
    }
  },
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  methods: {

  }
}
</script>

