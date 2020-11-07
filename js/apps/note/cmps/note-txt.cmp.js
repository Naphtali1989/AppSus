import '../../cmps/long-text.cmp.js';

export default {
    props: ['note'],
    name: 'note-txt',
    template: `
            <section class="note-txt">
                  <!-- <long-text :txt="note.info.val" /> -->
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
    },
    components: {
        // longText
    }
}