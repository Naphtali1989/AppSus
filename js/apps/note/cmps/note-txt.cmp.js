export default {
    props: ['note'],
    name: 'noteTxt',
    template: `
            <section class="note-txt">
                  <h3 contenteditable="true" class="editable-val"   @blur="emitChange">{{note.info.val}}</h3>
                  <p contenteditable="true" class="editable-title"   @blur="emitChange">{{note.info.title}}</p>
            </section>


    `,
    methods: {
        emitChange(ev) {
            // console.log('event:', ev)
            // console.log('getting:', ev.target.textContent)
            if (ev.target.className === 'editable-val') this.note.info.val = ev.target.textContent
            else this.note.info.title = ev.target.textContent;
            this.$emit('update', this.note.id)
        },
        created() {
            // console.log('note txt:', this.note)
        }
    }
}