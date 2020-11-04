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
                <note-add />

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