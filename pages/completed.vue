<template>
  <div class="pa4 f3">
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
    </nav>
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
import {init} from './shared'

export default {
  fetch:init,
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  methods: {

  }
}
</script>

