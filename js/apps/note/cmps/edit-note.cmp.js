export default {
    props: ['note'],
    name: 'edit-note',
    template: ` 
            <section class="edit-note">
                <form @submit.prevent="emitNoteEdit">
                    <input type="text" v-model="noteInfo" placeholder="Edit me!"/>
                    <button class="btn">Confirm!</button>
                </form>
            </section>
    
    
    `,
    data() {
        return {
            noteInfo: this.note.info.val
        }
    },
    methods: {
        emitNoteEdit() {
            console.log('confirm has been clicked!')

            this.$emit('confirmEdit', this.note.id, this.noteInfo)
        }
    }
}