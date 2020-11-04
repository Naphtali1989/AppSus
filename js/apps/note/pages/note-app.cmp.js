import noteList from '../cmps/note-list.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js'
import { noteService } from '../note-service.js';

export default {
    name: 'noteApp',
    template: `
            <section class="note-app-container">
                <!--Search bar-->
                <!--Note add-->
                <note-list :notes="notes" />
                <note-add @addNote="onAddNote" />

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
                .then(notes => this.notes = notes)
        },
        onAddNote(note) {
            console.log('note:', note)
            noteService.addNote(note)
                .then(() => console.log('note has been added!'))
                // this.notes.push(note)
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