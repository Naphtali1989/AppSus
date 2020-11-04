export default {
    props: ['note'],
    name: 'noteImg',
    template: `
            <section class="note-img">
                <img :src="note.info.txt" alt=""/>
                <p contenteditable="true" class="img-title">Vue js is cool</p>
            </section>


    `,
    created() {
        console.log('note img:', this.note)
    }
}