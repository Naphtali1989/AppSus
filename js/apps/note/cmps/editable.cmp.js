export default {
    name: 'editable',
    props: ['note'],
    template: `
                <section>
                    <p contenteditable="true" @blur="emitChange">{{note.info.txt}}</p>
                 </section>
    
        `,
    methods: {
        emitChange(ev) {
            const updatedTxt = ev.target.textContent;
            // console.log('getting id:', this.note.id)
            // console.log('getting txt:', updatedTxt)
            this.$emit('update', this.note.id, updatedTxt)
        }
    },
    created() {
        console.log(this.note)
    }
}