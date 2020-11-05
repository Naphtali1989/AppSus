import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteControl from './note-control.cmp.js'
import { noteService } from '../note-service.js';
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js';

export default {
    props: ['note'],
    name: 'note-preview',
    template: `
                <section class="note-preview" :style="{backgroundColor: note.style.backgroundColor}">
                    <component :is="note.type" :note="note"/>
                      <span class="note-created">{{formatTime}}</span>
                    <note-control :note="note" @deleteNote="onDeleteNote" @copyNote="onCopyNote" @changeColor="onChangeColor" />
                </section>
    
    `,
    methods: {
        onDeleteNote(noteId) {
            console.log('reached main app!')
            noteService.deleteNote(noteId)
                .then(() => eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Note has been deleted', type: 'success' }))
        },
        onCopyNote(note) {
            console.log('copied!')
            noteService.addNote(note)
                .then(() => eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Note has been Copied!', type: 'success' }))
                // .then(() => console.log('note has been copied'))
        },
        onChangeColor(color) {
            this.note.style.backgroundColor = color;
            noteService.onChangeStyleProp(this.note.id, color)
                .then(() => console.log('changed color!'))
        }
    },
    computed: {
        formatTime() {
            return new Date(this.note.createdAt).toLocaleDateString()
        }
    },
    created() {
        console.log(this.note)
    },
    components: {
        noteTxt,
        noteImg,
        noteVideo,
        noteControl
    }
}