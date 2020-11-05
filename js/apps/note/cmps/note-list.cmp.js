import notePreview from './note-preview.cmp.js'
import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'

export default {
    props: ['notes'],
    name: 'nodeList',
    template: `
                <section class="main-notes">
                    <h3 class="pinned">
                        <i class="fas fa-thumbtack"></i> Pinned
                        </h3>
                    <div class="notes-container">
                         <note-preview 
                         v-for="note in notes"
                          :key="note.id" 
                          :note="note"
                          />
                    </div>
                    <h3 class="pinned">Others</h3>
                </section>
    
    
        `,
    components: {
        notePreview
    }

}