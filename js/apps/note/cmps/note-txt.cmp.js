export default {
    props: ['note'],
    name: 'noteTxt',
    template: `
            <section class="note-txt">
                  <h3>{{note.info.val}}</h3>
                  <p contenteditable="true"  @blur="emitChange">{{note.info.title}}</p>
            </section>


    `,
    methods: {
        emitChange(ev) {
            console.log('event:', ev)
            console.log('getting:', ev.target.textContent)
            this.note.info.title = ev.target.textContent;
            this.$emit('update', this.note.id)
        },
        created() {
            console.log('note txt:', this.note)
        }
    }
}