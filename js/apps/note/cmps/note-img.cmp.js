export default {
    props: ['note'],
    name: 'noteImg',
    template: `
            <section class="note-img">
                <img :src="note.info.txt" alt=""/>
                <p>{{note.info.txt}}</p>
            </section>


    `,
    created() {
        console.log('note img:', this.note)
    }
}