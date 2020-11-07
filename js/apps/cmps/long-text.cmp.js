export default {
    name: 'longText',
    props: ['txt'],
    template: `
                <section>
                    <p class="book-desc">{{txt}}</p>
                    <button @click="isShowMore = !isShowMore" class="show-txt-btn">{{btnTxt}}</button>
                </section>
            `,
    data() {
        return {
            isShowMore: false
        }
    },
    computed: {
        showCharacters() {
            // this.btnTxt = this.isShowMore ? 'Show Less' : 'Show More...';
            if (!this.isShowMore && this.txt.length > 100) return this.txt.substring(0, 100)
            else return this.txt;
        },
        btnTxt() {
            console.log(this.isShowMore)
            if (this.isShowMore) return 'Show less'
            else return 'Show More...'
        },
    },
    created() {
        console.log('text:', this.txt)
    }
}