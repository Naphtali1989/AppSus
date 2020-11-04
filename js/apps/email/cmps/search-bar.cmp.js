export default {
    template: `
            <section class="search-bar">
                <input type="text" placeholder="Search email" v-model="searchTerm" @input="emitSearchTerm"/>
                <span class="fas fa-search" @click="emitSearchTerm"></span>     
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