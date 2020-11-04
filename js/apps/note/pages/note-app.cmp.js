import noteList from '../cmps/note-list.cmp.js';
import { keepService } from '../keep-services/keep-service.js';

export default {
    name: 'keepApp',
    template: `
            <section class="keep-app-container">
                <!--Search bar-->
                <!--Note add-->
                <note-list :notes="notes" />

            </section>
    
        `,
    data() {
        return {
            notes: null
        }
    },
    methods: {
        getNotes() {
            keepService.getNotesForDisplay()
                .then(notes => this.notes = notes)
        }

    },
    created() {
        this.getNotes();
    },
    components: {
        noteList
    }

}