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
                <note-add @addNote="onAddNote"/>
                <template v-if="notes">
                    <note-list :notes="pinnedNotes" :listType="'PINNED'" />
                    <note-list :notes="unPinnedNotes" :listType="'OTHERS'" />
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
            this.filterBy = filterBy;
        },
        onAddNote(note) {
            console.log('Note todo:', note)
            noteService.addNote(note)
                .then(() => eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Note has been added!', type: 'success' }))
        },
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            const { txt, type } = this.filterBy;
            // if (type === 'all' && !txt) {
            //     const notes = this.notes.filter(note => {
            //         return note.info.title.toLowerCase().includes(txt.toLowerCase())

            //     })
            //     console.log('notes:', notes)
            // }
            if (type === 'all') return this.notes
            return this.notes.filter(note => {
                return note.info.title.toLowerCase().includes(txt.toLowerCase()) &&
                    note.type === type
            })
        },
        pinnedNotes() {
            // return this.notes.filter(note => note.isPinned)
            return this.notesToShow.filter(note => note.isPinned)
        },
        unPinnedNotes() {
            return this.notesToShow.filter(note => !note.isPinned)
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



// notesToShow() {
//         console.log('notes in filter:', this.notes)
//         if (!this.filterBy) return this.notes;
//         const { txt, type } = this.filterBy;
//         const title = txt.toLowerCase();
//         console.log('what is title?:', title)
//         return this.notes.filter(note => {
//             if (note.type === 'noteTxt') return note.info.txt.toLowerCase().includes(title)
//             else return note.info.title.toLowerCase().includes(title)
//         })
//     },