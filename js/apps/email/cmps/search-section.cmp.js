import searchBar from '../cmps/search-bar.cmp.js';
import sortBar from '../cmps/sort-bar.cmp.js';
import filterBar from '../cmps/filter-bar.cmp.js';

export default {
    template: `
            <section class="search-section flex">
                <search-bar />     
                <sort-bar :term="sortBy"/>
                <filter-bar :term="filterBy.mailStatus"/>

            </section>
            `,
    data() {
        return {
            sortBy: 'date',
            filterBy: { searchTerm: '', mailStatus: 'All' }
        }
    },
    components: {
        searchBar,
        sortBar,
        filterBar
    }


}