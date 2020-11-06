export default {
    props: ['note'],
    name: 'note-audio',
    template: `
            <section class="note-audio">
                <p>{{note.info.title}}</p>
                <audio controls>
                    <source :src="note.info.val">
                </audio>
            </section>
    `,
    created() {
        console.log('note audio', this.note)
    }
}