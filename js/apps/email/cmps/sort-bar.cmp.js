export default {
    props: ['term'],
    template: `
            <section class="sort-bar">
                <select v-model="sortTerm" @change="emitSortTerm">
                    <option value="date">Sort by date</option>     
                    <option value="name">Sort by Name</option>     
                    <option value="title">Sort by Title</option>     
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
            console.log('this sort term is:', this.sortTerm)
            this.$emit('setSort', this.sortTerm);
        }
    }

}