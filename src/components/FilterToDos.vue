<template>
  <div>
    <span>Filter To-Dos: </span>
    <select @change="filterToDos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterToDos",
  methods: mapActions(["filterToDos"]),
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: var(--todo-bg-color) 1px solid;
}
</style>