import noteList from '../cmps/note-list.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js'
import { noteService } from '../note-service.js';
import noteFilter from '../cmps/note-filter.cmp.js';

export default {
    name: 'noteApp',
    template: `
            <section class="note-app-container">
                <note-filter @doFilter="setFilter" />
                <note-add @addNote="onAddNote" />
                <note-list :notes="notesToShow" />

            </section>
    
        `,
    data() {
        return {
            notes: null,
            filterBy: null

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
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        onAddNote(note) {
            console.log('note:', note)
            noteService.addNote(note)
                .then(() => console.log('note has been added!'))
        },

    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            const { byText, byNoteType } = this.filterBy;
            const txt = byText.toLowerCase();
            const notes = this.notes.filter(note =>
                note.txt.toLowerCase().includes(txt) &&
                note.type === byNoteType
            )
            console.log('notes:', notes)
            return notes

        }
    },
    created() {
        this.getNotes();
    },
    components: {
        noteFilter,
        noteAdd,
        noteList
    }

}