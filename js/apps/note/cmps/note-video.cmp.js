import { noteService } from '../note-service.js';
export default {
    props: ['note'],
    name: 'note-video',
    template: `
            <section class="note-video">
                 <iframe width="270" height="270" :src="convertedUrl" class="video-frame" frameBorder="0" allowfullscreen></iframe>
                  <p contenteditable="true" class="editable-title"  @blur="emitChange">{{note.info.title}}</p>
            </section>
    `,
    methods: {
        emitChange(ev) {
            // console.log('event:', ev)
            // console.log('getting:', ev.target.textContent)
            this.note.info.title = ev.target.textContent;
            this.$emit('update', this.note.id)
        }
    },
    computed: {
        convertedUrl() {
            var id = this.note.info.val.split("?v=")[1];
            console.log('youtube id:', id)
            return `https://www.youtube.com/embed/${id}`;
        }
    },
}