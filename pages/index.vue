<template>
  <div class="pa4 f1">
    <h1 class="f1 bold center mw5">Todos</h1>
    <ul class="list pl0 ml0 center mw5 ba b--light-silver br3">
      <li v-for="todo of todos" :key="todo.id" class="ph3 pv2 bb b--light-silver">
        {{todo.task}}
      </li>
    </ul>
  </div>
</template>


<script>
import {mapState, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  methods: {

  }
}
</script>
