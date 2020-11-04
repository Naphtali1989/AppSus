import notePreview from './note-preview.cmp.js'
import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'

export default {
    props: ['notes'],
    name: 'nodeList',
    template: `
                <section class="notes-container">
                    <h3>Pinned</h3>
                    <div class="notes-grid">
                         <note-preview 
                         v-for="note in notes"
                          :key="note.id" 
                          :note="note"
                          />
                    </div>
                </section>
    
    
        `,
    components: {
        notePreview
    }

}