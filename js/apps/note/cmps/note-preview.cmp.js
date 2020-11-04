import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'

export default {
    props: ['note'],
    name: 'notePreview',
    template: `
            <section class="note-preview" :style="{backgroundColor: note.style.backgroundColor}">
                <component :is="note.type" :note="note"/>
                <div class="control-section">
                     <i :class="noteTypeIcon"></i>
                     <div class="btns-section">
                         <span class="btn" @click="emitDeleteNote"><i class="fas fa-trash"></i></span>
                     </div>
                </div>
            </section>
    
    `,
    methods: {
        emitDeleteNote() {
            this.$emit('deleteNote', this.note.id)
        }
    },
    created() {
        console.log(this.note)
    },
    computed: {
        noteTypeIcon() {
            if (this.note.type === 'noteTxt') return 'fas fa-font fa-1x'
            else if (this.note.type === 'noteImg') return 'far fa-image fa-1x'
        }
    },
    components: {
        noteTxt,
        noteImg
    }
}