export default {
    props: ['txt', 'size'],
    template: `
        <section >
            <p class="email-desc">{{showDesc}}
            </p>
        </section>
    `,
    data() {
        return {

        }
    },
    computed: {
        showDesc() {
            var tail = (this.txt.length >= this.size) ? '...' : '';
            return this.txt.substring(0, this.size) + tail;
        },
    },
    methods: {

    },
}