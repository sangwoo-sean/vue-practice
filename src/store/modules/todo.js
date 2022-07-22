export default {
    namespaced: true,
    state: {
        todos: [
            {id: 1, text: 'buy a car', checked: false},
            {id: 2, text: 'buy a house1', checked: true}
        ]
    },
    getters: {
        countCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    },
    mutations: {
        ADD_TODO(state, text) {
            const todoItem = {
                id: Math.random(),
                text,
                checked: false
            };
            state.todos.push(todoItem);
        },
        TOGGLE_TODO(state, {id, checked}) {
            const target = state.todos.find(todo => todo.id === id);
            target.checked = checked;
        },
        DELETE_TODO(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
    },
    actions: {
        addTodo({ commit }, value) {
            setTimeout(() => {
                commit('ADD_TODO', value);
            }, 1000);
        },
    },
}