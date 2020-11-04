import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    name: 'nodeList',
    template: `
                <section class="notes-container">
                    <h3>Pinned</h3>
                    <ul>
                        <li>
                            <note-preview v-for="note in notes" :key="note.id" :note="note" />
                        </li>
                    </ul>
                    {{notes}}
                </section>
    
    
        `,
    components: {
        notePreview
    }

}