import { utilService } from '../../../services/util-service.js'
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js'
import todosEdit from './todos-edit.cmp.js'


export default {
    name: 'noteAdd',
    template: `
            <section class="note-add-container">
                <div class="input-container">
                    <todos-edit  v-if="newNote.type === 'noteTodo'" @confirmTodos="onAddNote"/>
                    <form @submit.prevent="onAddNote" v-if="newNote.type != 'noteTodo'">
                        <input type="text" :placeholder="placeholder" v-model="newNote.info.val"/>
                    </form>
                    <div class="btns-container">
                        <span class="btn-txt" :class="{focused:newNote.type === 'noteTxt'}" @click.stop="setMode('noteTxt')">
                            <i class="fas fa-font fa-2x"></i>
                        </span>
                        <span class="btn-img" :class="{focused:newNote.type === 'noteImg'}"  @click.stop="setMode('noteImg')">
                            <i class="far fa-image fa-2x"></i>
                        </span>
                        <span class="btn-video" :class="{focused:newNote.type === 'noteVideo'}"  @click.stop="setMode('noteVideo')">
                            <i class="fab fa-youtube fa-2x"></i>
                        </span>
                        <span :class="{focused:newNote.type === 'noteList'}" class="btn" @click.stop="setMode('noteTodo')">
                            <i class="fas fa-list fa-2x"></i>
                        </span>
                        <span :class="{focused:newNote.type === 'noteAudio'}" class="btn" @click.stop="setMode('noteAudio')">
                            <i class="fas fa-volume-up fa-2x"></i>
                        </span>
                    </div>
                </div>
            </section>
    `,
    data() {
        return {
            placeholders: {
                noteTxt: 'Please enter text...',
                noteImg: 'Please enter a img url...',
                noteVideo: 'Please enter a video url...',
                noteTodo: 'Please enter a todo',
                noteAudio: 'Please enter a audio link'
            },
            titles: {
                noteTxt: 'Txt title go here',
                noteImg: 'Img title go here',
                noteVideo: 'Video title go here',
                noteAudio: 'Audio title go here'
            },
            newNote: {
                info: {
                    title: 'Txt title goes here'
                },
                style: {
                    backgroundColor: '#ffff88',
                },
                type: 'noteTxt'
            }
        }

    },
    methods: {
        addTodosToNote(todos) {
            console.log('worked!')
            this.newNote.info.todos = todos;
        },
        onAddNote(todos) {
            if (this.newNote.type === 'noteTodo') {
                this.addTodosToNote(todos);
                this.$emit('addNote', this.newNote)
                return;
            }
            if (!this.newNote.info.val) {
                eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Please fill the input', type: 'error' })
                return;
            }
            //deep copy
            const deepCopy = JSON.parse(JSON.stringify(this.newNote))
            this.$emit('addNote', deepCopy);
            let type = this.newNote.type
            this.newNote.info = {
                val: '',
                title: this.titles[type]
            }
        },
        setMode(type) {
            this.newNote.type = type
            if (type === 'noteTodo') {
                this.newNote.info = {
                    label: 'Todo List Name(You can edit)',
                    todos: []
                }
            } else {
                this.newNote.info = { val: '', title: this.titles[type] }
            }
        }
    },
    computed: {
        placeholder() {
            const { type } = this.newNote
            return this.placeholders[type]
        }
    },
    components: {
        todosEdit
    }
}