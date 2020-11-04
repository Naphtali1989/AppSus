export default {
    template: `
            <section class="search-bar">
                <input type="text" placeholder="Search mail" v-model="searchTerm" @input="emitSearchTerm"/>     
            </section>
            `,
    data() {
        return {
            searchTerm: '',
        }
    },
    methods: {
        emitSearchTerm() {
            console.log('search by:', this.searchTerm)
            this.$emit('setSearch', this.searchTerm);
        }
    }

}