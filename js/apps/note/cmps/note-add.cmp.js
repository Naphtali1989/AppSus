import { utilService } from '../../../services/util-service.js'


export default {
    name: 'noteAdd',
    template: `
            <section class="note-add-container">
                <div class="input-container">
                    <form @submit.prevent="onAddNote">
                        <input type="text" :placeholder="placeholder" v-model="newNote.info.txt"/>
                    </form>
                    <div class="btns-container">
                        <button class="btn" @click.stop="setMode('noteTxt')"><i class="fas fa-font fa-2x"></i></button>
                        <button class="btn" @click.stop="setMode('noteImg')"><i class="far fa-image fa-2x"></i></button>
                    </div>
                </div>
            </section>
    
    
    `,
    data() {
        return {
            placeholders: {
                noteTxt: 'Please enter text...',
                noteImg: 'Please enter a img url...'
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
            const deepCopy = JSON.parse(JSON.stringify(this.newNote))
            this.$emit('addNote', deepCopy)
        },
        setMode(type) {
            if (type === 'noteTxt') {
                this.noteType = 'noteTxt'
                this.newNote.info = { txt: '' }
            } else if (type === 'noteImg') {
                this.noteType = 'noteImg'
                this.newNote.info = { txt: '', url: '' }
            }
            this.newNote.type = this.noteType;
        },
    },
    computed: {
        placeholder() {
            if (this.noteType === 'noteTxt') return this.placeholders.noteTxt
            else if (this.noteType === 'noteImg') return this.placeholders.noteImg
        },

    },
}