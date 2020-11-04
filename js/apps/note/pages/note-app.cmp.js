import noteList from '../cmps/note-list.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js'
import { noteService } from '../note-service.js';

export default {
    name: 'noteApp',
    template: `
            <section class="note-app-container">
                <!--Search bar-->
                <!--Note add-->
                <note-add @addNote="onAddNote" />
                <note-list :notes="notes" @deleteNote="onDeleteNote"/>

            </section>
    
        `,
    data() {
        return {
            notes: null
        }
    },
    methods: {
        getNotes() {
            noteService.getNotesForDisplay()
                .then(notes => {
                    console.log('getting from service:', notes)
                    this.notes = notes
                })
        },
        onAddNote(note) {
            console.log('note:', note)
            noteService.addNote(note)
                .then(() => console.log('note has been added!'))
        },
        onDeleteNote(noteId) {
            console.log('reached main app!')
            noteService.deleteNote(noteId)
                .then(() => console.log('note has been deleted'))
        }

    },
    created() {
        this.getNotes();
    },
    components: {
        noteAdd,
        noteList
    }

}