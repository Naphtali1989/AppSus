export default {
    template: `
            <section class="search-bar">
                <input type="text" placeholder="Search mail" v-model="searchTerm" />         
            </section>
            `,
    data() {
        return {
            searchTerm: '',
        }
    },


}