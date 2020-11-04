export default {
    prop: ['term'],
    template: `
            <section class="sort-bar">
                sorting
                <input type="checkbox" @input="emitSortTerm('all')"/>     
            </section>
            `,
    data() {
        return {
            sortTerm: this.term,
        }
    },
    methods: {
        emitSortTerm(sortTerm) {
            this.$emit('setSort', sortTerm);
        }
    }

}