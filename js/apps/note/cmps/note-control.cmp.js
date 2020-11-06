import notePalette from './note-palette.cmp.js';
import { eventBus, SENT_REPLY_EMAIL } from '../../../services/event-bus-service.js'


export default {
    props: ['note'],
    name: 'note-control',
    template: `
     <div class="control-section">
         <i :class="noteTypeIcon" class="noteIcon"></i>
         <div class="btns-section">
             <!-- <span class="btn" @mouseover.stop="hover = true" @mouseleave ="hover = false"><i class="fas fa-palette"></i></span> -->
                         <span class="btn" @click.stop="sendAsMail"><i class="fas fa-paper-plane"></i></span>
                         <span class="btn" @click.stop="emitCopyNote" title="Copy"><i class="fas fa-clone"></i></span>
                         <span class="btn" @click.stop="show= !show"><i class="fas fa-palette"></i></span>
                         <span class="btn" @click.stop="emitPinNote"><i class="fas fa-thumbtack"></i></span>
                         <span class="btn" @click.stop="emitEdit"><i class="fas fa-edit"></i></span>
                         <span class="btn" @click.stop="emitDeleteNote"><i class="fas fa-trash"></i></span>
                        <note-palette  v-show="show" @changeColor="emitChangeColor" :note="note"/>
                     </div>
                      <!-- <span class="note-created">{{formatTime}}</span> -->
                </div>
    `,
    data() {
        return {
            // hover: false,
            show: false

        }
    },
    methods: {
        sendAsMail() {
            let replyDetail;
            if (this.note.type === 'noteTodo') {
                replyDetail = {
                    composer: 'Ninja coder',
                    subject: this.note.info.label,
                    body: JSON.stringify(this.note.info.todos),
                    sentAt: new Date(this.note.createdAt).toLocaleString()
                }
            } else {
                replyDetail = {
                    composer: 'Ninja coder',
                    subject: this.note.info.title,
                    body: this.note.info.val,
                    sentAt: new Date(this.note.createdAt).toLocaleString()
                }
            }
            console.log('reply detail is:', replyDetail)

            this.$router.push('/email/board/' + JSON.stringify(replyDetail));
            // eventBus.$emit(SENT_REPLY_EMAIL, replyDetail)

        },
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
        formatTime() {
            return new Date(this.note.createdAt).toLocaleDateString()
        },
    },
    components: {
        notePalette
    },
    created() {
        console.log('note information:', this.note)
    }

}