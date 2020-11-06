import noteTodoItem from './note-todo-item.cmp.js'

export default {
    props: ['note'],
    name: 'note-todo',
    template: `
            <section class="note-todos-container">
                <ul>
                    <note-todo-item v-for="todo in note.info.todos" :key="todo.id" :todo="todo" @deleteTodo="emitDeleteTodo"/>
                </ul>
                <!-- Will render a todo -->
            </section>
    
    
    
        `,
    methods: {
        emitDeleteTodo(todoId) {
            this.$emit('deleteTodo', todoId)
        }
    },
    components: {
        noteTodoItem
    }
}