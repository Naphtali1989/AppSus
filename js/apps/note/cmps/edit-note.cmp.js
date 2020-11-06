import { utilService } from '../../../services/util-service.js'

export default {
    props: ['note'],
    name: 'edit-note',
    template: ` 
            <section class="edit-note">
                <form @submit.prevent="emitNoteEdit">
                    <input type="text"
                        v-for="todo in note.info.todos"
                        :key="todo.id"
                        placeholder="Enter todo"
                        v-model="todo.todoTxt"
                        v-if="note.type === 'noteTodo'"
                    />
                    <input v-if="note.type != 'noteTodo'" type="text" v-model="noteInfo" placeholder="Edit me!" />
                    <button class="btn">Confirm!</button>
                </form>
            </section>
    
    `,
    data() {
        return {
            noteInfo: this.note.info.val,
            todo: { todoTxt: '' }
            // todos: [{ todoTxt: '', isDone: false, id: utilService.makeId() }]
        }
    },
    methods: {
        emitNoteEdit() {
            console.log('confirm has been clicked!')
            this.$emit('confirmEdit', this.note.id, this.noteInfo)
        }
    },
    created() {
        console.log('this note:', this.note)
    }
}