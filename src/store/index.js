import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
    },
    mutations: {
        SET_TODO: (state, todos) => state.todos = todos,
        NEW_TODO: (state, todo) => state.todos.unshift(todo),
        REMOVE_TODO: (state, id) => state.todos = state.todos.filter( todo => todo.id !==id),
        TOGGLE_TODO:  (state, toggledToDo)  => {
            const index = state.todos.findIndex(todo => todo.id === toggledToDo.id)
            if(index !== -1){
                state.todos.splice(index, 1, toggledToDo)
            }
        }
    },
    getters: {
        getAllToDos: (state) => state.todos
    },
    actions: {
        async fetchToDos({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            commit('SET_TODO', response.data)
        },
        async addToDo({commit},title){
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed:false})
            commit('NEW_TODO', response.data)
        },
        async deleteToDo({commit}, id){
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            commit('REMOVE_TODO', id)
        },
        async filterToDos({commit}, e){
            const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
            commit('SET_TODO', response.data)
        },
        async toggleToDo({commit}, toToggle){
            const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${toToggle.id}`, toToggle)
            commit('TOGGLE_TODO', response.data)
        }
    }
})