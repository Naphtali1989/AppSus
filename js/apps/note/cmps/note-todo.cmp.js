import noteTodoItem from './note-todo-item.cmp.js'

export default {
    props: ['note'],
    name: 'note-todo',
    template: `
            <section class="note-todos-container">
                <ul>
                    <h1 class="todo-list-name" contenteditable="true" class="editable-title"   @blur="emitChange" >{{note.info.label}}</h1>
                    <note-todo-item 
                        v-for="todo in note.info.todos" 
                        :key="todo.id" 
                        :todo="todo" 
                        @deleteTodo="emitDeleteTodo"
                        @saveMarkTodo="emitSaveMark"
                        />
                </ul>
            </section>
    
    
    
        `,
    methods: {
        emitSaveMark(todoId, markStatus) {
            this.$emit('saveMarkTodo', todoId, markStatus);
        },
        emitDeleteTodo(todoId) {
            this.$emit('deleteTodo', todoId)
        },
        emitChange(ev) {
            console.log('event:', ev)
            console.log('getting:', ev.target.textContent)
                //change list name header
            this.note.info.label = ev.target.textContent;
            this.$emit('update', this.note.id)
        },
    },
    components: {
        noteTodoItem
    }
}