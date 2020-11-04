import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'

export default {
    props: ['note'],
    name: 'notePreview',
    template: `
            <section class="note-preview">
                <component :is="note.type" :note="note"/>
            </section>
    
    
    `,
    created() {
        console.log(this.note)
    },
    components: {
        noteTxt,
        noteImg
    }
}