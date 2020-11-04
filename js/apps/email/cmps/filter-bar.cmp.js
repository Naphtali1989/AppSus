export default {
    props: ['term'],
    template: `
            <section class="filter-bar">
                <label>All
                    <input type="checkbox" @input="emitFilterTerm('all')" v-model="filterTerm"/>     
                </label>
                <label>Read
                    <input type="checkbox" @input="emitFilterTerm('read')" v-model="filterTerm"/>     
                </label>
                <label>Unread
                    <input type="checkbox" @input="emitFilterTerm('unread')" v-model="filterTerm"/>     
                </label>
                   
            </section>
            `,
    data() {
        return {
            filterTerm: this.term,
        }
    },
    methods: {
        emitFilterTerm(term) {
            this.filterTerm = term
            console.log('filterTerm is:', this.filterTerm)
            this.$emit('setFilter', term);
        }
    }

}