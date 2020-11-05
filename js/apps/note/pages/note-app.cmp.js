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
                <template v-if="notes">
                    <h3>Pinned</h3>
                    <note-list :notes="notesToShow" />
                    <h3>Others</h3>
                    <!-- <note-list :notes="unPinnedNotes" /> -->
                </template>
                

                    

            </section>
    
        `,
    data() {
        return {
            notes: null,
            filterBy: null,
        }
    },
    methods: {
        getNotes() {
            noteService.getNotesForDisplay()
                .then(notes => {
                    this.notes = notes;
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
            console.log('notes in filter:', this.notes)
            if (!this.filterBy) return this.notes;
            const { byText, byNoteType } = this.filterBy;
            const title = byText.toLowerCase();
            console.log('what is title?:', title)
            return this.notes.filter(note => {
                if (note.type === 'noteTxt') return note.info.txt.toLowerCase().includes(title)
                else return note.info.title.toLowerCase().includes(title)
            })
        },
        pinnedNotes() {
            return this.notes.filter(note => note.isPinned)
        },
        unPinnedNotes() {
            return this.notes.filter(note => !note.isPinned)
        }
    },
    created() {
        this.getNotes();
        eventBus.$on('pinNote', id => {
            noteService.pinNote(id)
                .then(notes => {
                    this.notes = notes;
                })
        })
    },
    components: {
        noteFilter,
        noteAdd,
        noteList
    }

}