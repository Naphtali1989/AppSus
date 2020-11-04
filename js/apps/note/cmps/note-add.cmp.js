import noteTxt from './note-txt.cmp.js'
import { utilService } from '../../../services/util-service.js'


export default {
    name: 'noteAdd',
    template: `
            <section class="note-add-container">
                <div class="input-container">
                    <form @submit.prevent="onAddNote">
                        <input type="text" :placeholder="placeholder" v-model="newNote.info.txt" @submit=""/>
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
                id: utilService.makeId(),
                info: {
                    txt: ''
                },
                backgroundColor: '#ffff88'
            }
        }

    },
    methods: {
        onAddNote() {
            console.log('note has been added!')
            this.$emit('addNote', this.newNote)

        },
        setMode(type) {
            if (type === 'noteTxt') {
                this.noteType = 'noteTxt'
                this.newNote.info = { txt: '' }
                this.newNote.id = utilService.makeId()
            } else if (type === 'noteImg') {
                this.noteType = 'noteImg'
                this.newNote.info = { txt: '', url: '' }
                this.newNote.id = utilService.makeId()
            }
        },
    },
    computed: {
        placeholder() {
            if (this.noteType === 'noteTxt') return this.placeholders.noteTxt
            else if (this.noteType === 'noteImg') return this.placeholders.noteImg
        },
        setModel() {
            if (this.noteType === 'noteTxt') return 'info.txt'
            else if (this.noteType === 'noteImg') return 'info.url'
        }

    },
    components: {
        noteTxt
    }

}