import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    name: 'nodeList',
    template: `
                <section class="notes-container">
                    <h3>Pinned</h3>
                    <div class="notes-grid">
                         <note-preview v-for="note in notes" :key="note.id" :note="note" />
                    </div>
                    {{notes}}
                </section>
    
    
        `,
    components: {
        notePreview
    }

}