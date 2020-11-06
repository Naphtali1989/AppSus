import { utilService } from '../../../services/util-service.js';


export default {
    name: 'todos-edit',
    template: `
                <section class="todos-edit-container">
                    <form @submit.prevent="onAddInput">
                        <input v-for="(todo,idx) in todos"
                            :key="idx"
                            type="text" 
                            v-focus
                            placeholder="Enter to add a todo"
                            v-model="todo.todoTxt" />
                            <button class="hide"></button>
                    </form>
                    <button class="confirm-list-btn" @click="emitConfirm">Save</button>
                </section>
    
            `,
    data() {
        return {
            todos: [{ todoTxt: '', isDone: false, id: utilService.makeId() }]
        }
    },
    methods: {
        onAddInput() {
            this.todos.push({ todoTxt: '', isDone: false, id: utilService.makeId() })
        },
        emitConfirm() {
            console.log(this.todos)
            this.$emit('confirmTodos', this.todos)
            this.todos = [{ todoTxt: '', isDone: false, id: utilService.makeId() }]
        }
    }
}