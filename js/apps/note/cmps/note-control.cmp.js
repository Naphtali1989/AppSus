import notePalette from './note-palette.cmp.js';


export default {
    props: ['note'],
    name: 'note-control',
    template: `
     <div class="control-section">
                     <i :class="noteTypeIcon" class="noteIcon"></i>
                     <div class="btns-section">
                         <span class="btn" @click="emitDeleteNote"><i class="fas fa-trash"></i></span>
                         <span class="btn" @click="emitCopyNote"><i class="fas fa-clone"></i></span>
                         <span class="btn" @click="show= !show"><i class="fas fa-palette"></i></span>
                         <!-- <span class="btn" @mouseover.stop="hover = true" @mouseleave ="hover = false"><i class="fas fa-palette"></i></span> -->
                         <div>
                             <note-palette  v-show="show" @changeColor="emitChangeColor" :note="note"/>
                         </div>
                     </div>
                </div>
    `,
    data() {
        return {
            // hover: false,
            show: false

        }
    },
    methods: {
        emitDeleteNote() {
            this.$emit('deleteNote', this.note.id)
        },
        emitCopyNote() {
            const deepCopy = JSON.parse(JSON.stringify(this.note))
            this.$emit('copyNote', deepCopy)
        },
        emitChangeColor(color) {
            this.$emit('changeColor', color)
        }
    },
    computed: {
        noteTypeIcon() {
            if (this.note.type === 'noteTxt') return 'fas fa-font fa-1x'
            else if (this.note.type === 'noteImg') return 'far fa-image fa-1x'
            else if (this.note.type === 'noteVideo') return 'fab fa-youtube fa-1x'
        },
    },
    components: {
        notePalette
    }

}