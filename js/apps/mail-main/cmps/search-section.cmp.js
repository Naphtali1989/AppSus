import searchBar from '../cmps/search-bar.cmp.js';
import sortBar from '../cmps/sort-bar.cmp.js';
import filterBar from '../cmps/filter-bar.cmp.js';

export default {
    template: `
            <section class="search-section">
                <search-bar />     
                <sort-bar />
                <filter-bar />

            </section>
            `,
    data() {
        return {
            sortBy: '',
            filterBy: { searchTerm: '', mailStatus: 'All' }
        }
    },
    components: {
        searchBar,
        sortBar,
        filterBar
    }


}