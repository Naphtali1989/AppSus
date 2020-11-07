export default {
    template: `
                <section class="book-filter flex column">
                    <input type="search" v-model="filterBy.byName" placeholder="Search by name" @input="emitFilter" />

                    <div class="price-filter flex">
                        <input type="number" v-model="filterBy.fromPrice" placeholder="from price" @input="emitFilter" />
                        <input type="number" v-model="filterBy.toPrice" placeholder="to price" @input="emitFilter" />
                    </div>
                </section>
            `,
    data() {
        return {
            filterBy: { byName: '', fromPrice: -Infinity, toPrice: Infinity }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}