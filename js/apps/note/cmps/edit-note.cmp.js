import { utilService } from '../../../services/util-service.js'

export default {
    props: ['note'],
    name: 'edit-note',
    template: ` 
            <section class="edit-note">
                <section>
                    <form v-if="note.type === 'noteTodo'">
                            <input type="text"
                                v-for="(todo,idx) in note.info.todos"
                                :key="todo.id"
                                placeholder="Enter todo"
                                 v-model="todos[idx].todoTxt"
                                v-if="note.type === 'noteTodo'"
                                v-focus
                             />
                        <button @click.prevent="onAddInput" class="add-todo-btn" v-if="note.type === 'noteTodo'">Add Todo</button>
                        <button class="btn" class="confirm-todo-btn" @click="emitNoteEdit">Confirm!</button>
                    </form>
                </section>

                <form @submit.prevent="emitNoteEdit" v-if="note.type != 'noteTodo'">
                    <input v-if="note.type != 'noteTodo'" type="text" v-model="noteInfo" placeholder="Edit me!" />
                    <button class="confirm-todo-btn">Confirm!</button>
                </form>
            </section>
    
    `,
    data() {
        return {
            noteInfo: this.note.type === 'noteTodo' ? this.note.info.todos : this.note.info.val,
            todos: this.note.info.todos
                // todos: [{ todoTxt: '', isDone: false, id: utilService.makeId() }]
        }
    },
    methods: {
        onAddInput() {
            this.todos.push({ todoTxt: '', isDone: false, id: utilService.makeId() })
        },
        emitNoteEdit() {
            console.log('confirm has been clicked!')
            this.$emit('confirmEdit', this.note.id, this.noteInfo)
        }
    },
    created() {
        console.log('this note:', this.note)
    }
}