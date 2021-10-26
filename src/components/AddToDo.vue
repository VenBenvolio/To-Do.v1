<template>
  <div>
    <h3>Add To-Do</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="title" placeholder="Add To-Do..." /><input
          type="submit"
          value="Add"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddToDo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addToDo"]),
    onSubmit() {
      this.addToDo(this.title);
      this.title=''
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid var(--todo-bg-color);
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: var(--todo-bg-color);
  color: #fff;
  border: 1px var(--todo-bg-color) solid;
  cursor: pointer;
}
</style>