<script setup>
import { ref } from 'vue';

const newTodo = ref('');

const todos = ref([
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false,
  },
]);

function addTodo() {
  let id = todos.value.length + 1;
  todos.value.push({
    id: id,
    text: newTodo.value,
    completed: false
  })
}

</script>
<template>
  <input v-model="newTodo" type="text" data-test="new-todo-input"/>
  <button @click="addTodo()" data-test="new-todo-btn">Create Todo</button>
  <div>
    <ul>
      <li data-test="todo" v-for="todo in todos" :class="{completed: todo.completed}">
        <input type="checkbox" data-test="todo-checkbox" v-model="todo.completed">
        {{todo.text}}
      </li>
    </ul>
  </div>
</template>
