export default {
    props: ['txt'],
    template: `
        <section class="long-text">
            <p class="book-desc">{{showDesc}}
                <button class="toggle-words-btn btn" @click="toggleDesc">{{changeButtonTxt}}</button>
            </p>
        </section>
    `,
    data() {
        return {
            isDescFull: false,
        }
    },
    computed: {
        showDesc() {
            if (this.isDescFull) return this.txt
            return this.txt.substring(0, 100) + '...';
        },
        changeButtonTxt() {
            if (!this.isDescFull) return 'Show more...';
            else return 'Show less';
        },
    },
    methods: {
        toggleDesc() {
            this.isDescFull = !this.isDescFull
        }
    },
}