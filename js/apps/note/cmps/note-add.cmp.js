import { utilService } from '../../../services/util-service.js'
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js'


export default {
    name: 'noteAdd',
    template: `
            <section class="note-add-container">
                <div class="input-container">
                    <form @submit.prevent="onAddNote">
                        <input type="text" :placeholder="placeholder" v-model="newNote.info.val"/>
                    </form>
                    <div class="btns-container">
                        <span class="btn" @click.stop="setMode('noteTxt')"><i class="fas fa-font fa-2x"></i></span>
                        <span class="btn" @click.stop="setMode('noteImg')"><i class="far fa-image fa-2x"></i></span>
                        <span class="btn" @click.stop="setMode('noteVideo')"><i class="fab fa-youtube fa-2x"></i></span>
                        <span class="btn" @click.stop="setMode('noteTodo')"><i class="fas fa-list fa-2x" ></i></span>
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
                noteTodo: 'Please enter a todo'
            },
            noteType: 'noteTxt',
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
        onAddNote() {
            if (!this.newNote.info.val) {
                eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Please fill the input', type: 'error' })
                return;
            }
            const deepCopy = JSON.parse(JSON.stringify(this.newNote))
            this.$emit('addNote', deepCopy);
        },
        setMode(type) {
            if (type === 'noteTxt') {
                this.newNote.info = { val: '', title: 'Txt title goes here' }
            } else if (type === 'noteImg') {
                this.newNote.info = { val: '', title: 'Image Title goes here' }
            } else if (type === 'noteVideo') {
                this.newNote.info = { val: '', title: 'Video Title goes here' }
            }
            this.newNote.type = type
        }
    },
    computed: {
        placeholder() {
            const { type } = this.newNote
            return this.placeholders[type]
        }
    }
}