export default {
    props: ['note'],
    name: 'noteImg',
    template: `
            <section class="note-img">
                <img :src="note.info.val" alt=""/>
                <!-- <editable :note="note" @update="emitChange"/> -->
                <p contenteditable="true" class="editable-title" @blur="emitChange">{{note.info.title}}</p>
            </section>
    `,
    methods: {
        emitChange(ev) {
            // console.log('event', ev)
            //change the object pointer directly;
            this.note.info.title = ev.target.textContent;
            this.$emit('update', this.note.id)
        }
    },
    created() {
        // console.log('note img:', this.note)
    },
}