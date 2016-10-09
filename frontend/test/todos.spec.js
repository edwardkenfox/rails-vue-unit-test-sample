import assert from 'assert'

import Vue from 'vue'
import Todos from '../src/javascripts/todos.vue'

describe('Todos', () => {
  it('#addTodo creates new todo', function(done) {
    const vm = new Vue({
      template: '<div><todos ref="todos"></todos></div>',
      components: {
        'todos': Todos
      }
    }).$mount()
    let todosComponent = vm.$refs.todos;

    // Check initial number of todos
    assert.equal(todosComponent.todos.length, 0)

    // Create new todo
    todosComponent.showTodoInput = true
    todosComponent.newTodoTitle = "Buy milk"
    todosComponent.addTodo()

    // Assert new todo is added
    assert.equal(todosComponent.todos.length, 1)
    assert.equal(todosComponent.todos[0].title, "Buy milk")
    done()
  })
})
