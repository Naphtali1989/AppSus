export default {
    prop: ['term'],
    template: `
            <section class="filter-bar">
                <label>All
                    <input type="checkbox" @input="emitFilterTerm('all')"/>     
                </label>
                <label>Read
                    <input type="checkbox" @input="emitFilterTerm('read')"/>     
                </label>
                <label>Unread
                    <input type="checkbox" @input="emitFilterTerm('unread')"/>     
                </label>
                   
            </section>
            `,
    data() {
        return {
            filterTerm: this.term,
        }
    },
    methods: {
        emitFilterTerm(filterTerm) {
            this.$emit('setFilter', filterTerm);
        }
    }

}