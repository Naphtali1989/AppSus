import notePreview from './note-preview.cmp.js';
import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';


export default {
    props: ['notes', 'listType'],
    name: 'noteList',
    template: `
                <section class="main-notes">
                    <h3>{{listType}}</h3>
                   
                         <div class="notes-container">
                              <note-preview 
                              v-for="note in notes"
                               :key="note.id" 
                               :note="note"
                               />
                         </div>
                   
                    <div class="other-notes-container">
                             
                    </div>
                </section>
    
    
        `,
    components: {
        notePreview,
    },
    created() {
        // console.log('listType', this.listType)
    }

}