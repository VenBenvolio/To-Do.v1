<template>
  <div>
    <h3>To-Dos</h3>
    <div class="legend">
      <span>Click to toggle </span>
      <span> <span class="incomplete-box"></span>=Incomplete </span>
      <span> <span class="complete-box"></span>=Complete </span>
    </div>
    <div class="todos">
      <div
        class="todo"
        v-for="todo in getAllToDos"
        :key="todo.id"
        @click="passToggleToDo(todo)"
        :class="{ 'is-complete': todo.completed }"
      >
        <span>{{ todo.title }}</span>
        <i class="fas fa-times-circle" @click="deleteToDo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TheToDos",
  created() {
    this.fetchToDos();
  },
  computed: mapGetters(["getAllToDos"]),
  methods: {
    ...mapActions(["fetchToDos", "deleteToDo", "toggleToDo"]),
    passToggleToDo(todo) {
      const toToggle = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.toggleToDo(toToggle);
    },
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid var(--todo-border);
  background: var(--todo-bg-color);
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  color:var(--font-color);
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: var(--delete-btn);
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  max-width: 40%;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: var(--todo-bg-color-complete);
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: var(--todo-bg-color);
}
.is-complete {
  background: var(--todo-bg-color-complete);
  color: var(--font-color-complete)
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>