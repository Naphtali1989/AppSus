export default {
    template: `
            <section class="search-bar flex">
                <i class="fas fa-search btn" @click="emitSearchTerm"></i>     
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