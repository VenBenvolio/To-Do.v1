<template>
  <div id="app">
    <div class="container">
    <h1>To-Do Manager</h1>
      <add-to-do/>
      <filter-to-dos/>
      <to-dos /></div>
  </div>
</template>

<script>
import AddToDo from './components/AddToDo.vue';
import FilterToDos from './components/FilterToDos.vue';
import ToDos from "./components/TheToDos.vue";

export default {
  name: "App",
  components: {
    ToDos,
    AddToDo,
    FilterToDos,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
:root {
  --main-bg-color: #fdfcdc;
  --todo-bg-color: #f07167;
  --todo-border:#fed9b7;
  --todo-bg-color-complete: #e7b17e;
  --delete-btn: white;
}
body {
  font-family: "Montserrat", sans-serif;
  line-height: 1.6;
  background: var(--main-bg-color);
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
