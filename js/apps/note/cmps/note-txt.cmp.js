import '../../cmps/long-text.cmp.js';

export default {
    props: ['note'],
    name: 'note-txt',
    template: `
            <section class="note-txt">
                  <!-- <long-text :txt="note.info.val" /> -->
                  <p contenteditable="true" class="editable-title"   @blur="emitChange">{{note.info.title}}</p>
                  <!-- <h3 contenteditable="true" class="editable-val"   @blur="emitChange">{{note.info.val}}</h3> -->
                  <h3 contenteditable="true" class="editable-val"   @blur="emitChange">{{showCharacters}}</h3>
                  <button @click="isShowMore = !isShowMore" class="show-txt-btn btn">{{btnTxt}}</button>
            </section>


    `,
    data() {
        return {
            isShowMore: false
        }
    },
    methods: {
        emitChange(ev) {
            // console.log('event:', ev)
            // console.log('getting:', ev.target.textContent)
            if (ev.target.className === 'editable-val') this.note.info.val = ev.target.textContent
            else this.note.info.title = ev.target.textContent;
            this.$emit('update', this.note.id)
        },
    },
    computed: {
        showCharacters() {
            // this.btnTxt = this.isShowMore ? 'Show Less' : 'Show More...';
            if (!this.isShowMore && this.note.info.val.length > 30) return this.note.info.val.substring(0, 30)
            else return this.note.info.val;
        },
        btnTxt() {
            console.log(this.isShowMore)
            if (this.isShowMore) return 'Show less'
            else return 'Show More...'
        },
    },
    components: {
        // longText
    }
}