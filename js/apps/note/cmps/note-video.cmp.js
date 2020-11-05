export default {
    props: ['note'],
    name: 'note-video',
    template: `
            <section class="note-video">
                 <iframe width="200" height="200" :src="note.info.txt" class="video-frame" frameBorder="0"></iframe>
                  <p contenteditable="true" class="img-title">Vue js is cool</p>
            </section>
    `,
    methods: {
        convertUrl(url) {
            var id = url.split("?v=")[1];
            this.note.info.txt = `http://www.youtube.com/embed/${id}`

        },
    },
    created() {
        this.convertUrl(this.note.info.txt)
    }
}