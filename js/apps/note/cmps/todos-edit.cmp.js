export default {
    name: 'todos-edit',
    template: `
                <section class="todos-edit-container">
                    <form @submit.prevent="onAddInput">
                        <input v-for="(todo,idx) in todos"
                            :key="idx"
                            type="text" 
                            placeholder="Enter to add a todo"
                            v-model="todo.todoTxt" />
                            <button class="hide"></button>
                    </form>
                    <button class="confirm-list-btn" @click="confirm">Confirm!</button>
                </section>
    
            `,
    data() {
        return {
            inputCount: 1,
            todos: [
                { todoTxt: '' }
            ]
        }
    },
    methods: {
        onAddInput() {
            this.inputCount++;
            this.todos.push({ todoTxt: '' })
        },
        confirm() {
            console.log('confirmed!')
        }
    }
}