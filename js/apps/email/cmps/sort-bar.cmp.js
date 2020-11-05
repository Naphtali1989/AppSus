export default {
    props: ['term'],
    template: `
            <section class="sort-bar hide">
                <select v-model="sortTerm" @change="emitSortTerm">
                    <option value="date">Sort by date</option>     
                    <option value="name">Sort by Name</option>     
                    <option value="title">Sort by subject</option>     
                </select>     
            </section>
            `,
    data() {
        return {
            sortTerm: this.term,
        }
    },
    methods: {
        emitSortTerm() {
            this.$emit('setSort', this.sortTerm);
        }
    }

}