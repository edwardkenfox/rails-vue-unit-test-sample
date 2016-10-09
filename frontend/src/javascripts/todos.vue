<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos">
        {{ todo.title }}
      </li>
    </ul>
    <input type="text" placeholder="Create new todo" v-if="showTodoInput" v-model="newTodoTitle">
    <button @click="addTodo">+ Add Todo</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: [],
      showTodoInput: false,
      newTodoTitle: null
    }
  },
  methods: {
    addTodo: function() {
      if (this.showTodoInput && this.newTodoTitle) {
        let newTodo = {
          title: this.newTodoTitle,
          completed: false
        }
        this.todos.push(newTodo)
        this.newTodoTitle = null
      } else {
        this.showTodoInput = true
      }
    }
  }
}
</script>
