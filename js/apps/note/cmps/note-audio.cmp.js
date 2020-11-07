export default {
    props: ['note'],
    name: 'note-audio',
    template: `
            <section class="note-audio">
                <p contenteditable="true" class="editable-title"   @blur="emitChange">{{note.info.title}}</p>
                <audio controls>
                    <source :src="note.info.val">
                </audio>
            </section>
    `,
    methods: {
        emitChange(ev) {
            this.note.info.title = ev.target.textContent;
            this.$emit('update', this.note.id)
        },
    },
    created() {
        console.log('note audio', this.note)
    }
}