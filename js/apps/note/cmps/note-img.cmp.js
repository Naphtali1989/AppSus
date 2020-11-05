import editable from './editable.cmp.js'
export default {
    props: ['note'],
    name: 'noteImg',
    template: `
            <section class="note-img">
                <img :src="note.info.txt" alt=""/>
                <!-- <editable :note="note" @update="emitChange"/> -->
                <p contenteditable="true" class="img-title" @blur="emitChange">{{note.info.url}}</p>
                
            </section>


    `,
    methods: {
        emitChange(ev) {
            console.log('event', ev)
            this.note.info.url = ev.target.textContent;
            this.$emit('update', this.note.id)
        }
    },
    created() {
        console.log('note img:', this.note)
    },
    components: {
        editable
    }
}