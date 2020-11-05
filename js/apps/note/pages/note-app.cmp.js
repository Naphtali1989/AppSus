import noteList from '../cmps/note-list.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js'
import { noteService } from '../note-service.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js'

export default {
    name: 'noteApp',
    template: `
            <section class="note-app-container">
                <note-filter @doFilter="setFilter" v-if="this.notes" />
                <note-add @addNote="onAddNote" />
                <note-list :notes="notes" />

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
            console.log('getting:', filterBy);
            this.filterBy = filterBy;
        },
        onAddNote(note) {
            console.log('note:', note)
            noteService.addNote(note)
                .then(() => eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Note has been added!', type: 'success' }))
        },

    },
    computed: {
        notesToShow() {
            console.log('notes!!', this.notes)
            if (!this.filterBy) return this.notes;
            const { byText, byNoteType } = this.filterBy;
            const txt = byText.toLowerCase();
            const notes = this.notes.filter(note =>
                note.txt.toLowerCase().includes(txt)

            )
            console.log('notes:', notes)


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