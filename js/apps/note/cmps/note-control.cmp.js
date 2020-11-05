import notePalette from './note-palette.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js'


export default {
    props: ['note'],
    name: 'note-control',
    template: `
     <div class="control-section">
                     <i :class="noteTypeIcon" class="noteIcon"></i>
                     <div class="btns-section">
                         <span class="btn" @click="emitDeleteNote"><i class="fas fa-trash"></i></span>
                         <span class="btn" @click="emitCopyNote" title="Copy"><i class="fas fa-clone"></i></span>
                         <span class="btn" @click="show= !show"><i class="fas fa-palette"></i></span>
                         <!-- <span class="btn" @mouseover.stop="hover = true" @mouseleave ="hover = false"><i class="fas fa-palette"></i></span> -->
                         <span class="btn" @click="emitPinNote"><i class="fas fa-thumbtack"></i></span>
                         <span class="btn" @click="emitEdit"><i class="fas fa-edit"></i></span>
                        <note-palette  v-show="show" @changeColor="emitChangeColor" :note="note"/>
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
        },
        emitPinNote() {
            eventBus.$emit('pinNote', this.note.id)
        },
        emitEdit() {
            console.log('entered edit mode1')
            this.$emit('editNote')
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