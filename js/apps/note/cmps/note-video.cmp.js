import { noteService } from '../note-service.js';
export default {
    props: ['note'],
    name: 'note-video',
    template: `
            <section class="note-video" v-show="note">
                 <iframe width="200" height="200" :src="note.info.val" class="video-frame" frameBorder="0"></iframe>
                  <p contenteditable="true" class="img-title"  @blur="emitChange">{{note.info.title}}</p>
            </section>
    `,
    data() {
        return {
            isFixed: false
        }
    },
    methods: {
        convertUrl(url) {
            console.log('the url:', url)
            var id = url.split("?v=")[1];
            console.log('id:', id)
            this.note.info.val = `http://www.youtube.com/embed/${id}`;

        },
        emitChange(ev) {
            console.log('event:', ev)
            console.log('getting:', ev.target.textContent)
            this.note.info.title = ev.target.textContent;
            this.$emit('update', this.note.id)
        }
    },
    created() {
        console.log('Note video:', this.note.info.val)
        this.convertUrl(this.note.info.val)
    }
}