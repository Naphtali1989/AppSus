import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteControl from './note-control.cmp.js'
import noteAudio from './note-audio.cmp.js'
import { noteService } from '../note-service.js';
import editNote from '../cmps/edit-note.cmp.js';
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js';

export default {
    props: ['note'],
    name: 'note-preview',
    template: `
                <section class="note-preview" :style="{backgroundColor: backgroundColor}">
                    <edit-note :note="note" v-if="editMode" @confirmEdit=" onConfirmNoteEdit"/>
                    <component :is="note.type" :note="note" @update="onUpdate" v-else/>
                    <note-control 
                        :note="note"
                        @deleteNote="onDeleteNote"
                        @copyNote="onCopyNote"
                        @changeColor="onChangeColor"
                        @editNote="onEditNote"
                        />
                     
                </section>
    
    `,
    data() {
        return {
            editMode: false
        }
    },
    methods: {
        onConfirmNoteEdit(id, value) {
            this.editMode = false;
            noteService.confirmNoteEdit(id, value)
                .then(() => console.log('Note has been changed !'))

        },
        onEditNote() {
            this.editMode = !this.editMode
            console.log('edit mode is:', this.editMode)
        },
        onUpdate() {
            noteService.updateNote()
                .then(() => console.log('title has been updated'))
        },
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
        backgroundColor() {
            return this.note.style.backgroundColor
        }
    },
    created() {},
    components: {
        noteTxt,
        noteImg,
        noteVideo,
        noteControl,
        editNote,
        noteAudio
    }
}