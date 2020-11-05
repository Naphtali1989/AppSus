import { utilService } from '../../../services/util-service.js'
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js'


export default {
    name: 'noteAdd',
    template: `
            <section class="note-add-container">
                <div class="input-container">
                    <form @submit.prevent="onAddNote">
                        <input type="text" :placeholder="placeholder" v-model="newNote.info.txt"/>
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
                    txt: ''
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
            if (!this.newNote.info.txt) {
                eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Please fill the form', type: 'error' })
                return;
            }
            if (this.noteType === 'noteVideo') this.convertUrlToEmbed()
                // if (this.nodeType === 'noteTodo')
            const deepCopy = JSON.parse(JSON.stringify(this.newNote))
            this.$emit('addNote', deepCopy);
            this.newNote.info = {
                txt: ''
            }
        },
        setMode(type) {
            if (type === 'noteTxt') {
                this.noteType = 'noteTxt'
                this.newNote.info = { txt: '' }
            } else if (type === 'noteImg') {
                this.noteType = 'noteImg'
                this.newNote.info = { txt: '', url: '' }
            } else if (type === 'noteVideo') {
                this.noteType = 'noteVideo'
                this.newNote.info = { txt: '', url: '' }
            } else if (type === 'noteTodo') {
                this.noteType = 'noteTodo'
                this.newNote.info = {
                    todos: [
                        { txt: '', isComplete: false }
                    ]

                }
            }
            this.newNote.type = this.noteType;
        },
        convertUrlToEmbed() {
            var url = this.newNote.info.txt
            var id = url.split("?v=")[1];
            console.log('id of yotube:', id)
            console.log('id:', id)
            this.newNote.info.txt = `http://www.youtube.com/embed/${id}`
            console.log('new video url:', this.newNote.info.txt)

        },
    },
    computed: {
        placeholder() {
            if (this.noteType === 'noteTxt') return this.placeholders.noteTxt
            else if (this.noteType === 'noteImg') return this.placeholders.noteImg
            else if (this.noteType === 'noteVideo') return this.placeholders.noteVideo
            else if (this.noteType === 'noteTodo') return this.placeholders.noteTodo
        }
    }
}