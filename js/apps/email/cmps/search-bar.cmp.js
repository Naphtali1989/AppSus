export default {
    template: `
            <section class="search-bar">
                <i class="fas fa-search" @click="emitSearchTerm"></i>     
                <input type="search" placeholder="Search email" v-model="searchTerm" @input="emitSearchTerm"/>
            </section>
            `,
    data() {
        return {
            searchTerm: '',
        }
    },
    methods: {
        emitSearchTerm() {
            this.$emit('setSearch', this.searchTerm);
        }
    }

}