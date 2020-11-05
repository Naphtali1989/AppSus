import searchBar from '../cmps/search-bar.cmp.js';
import sortBar from '../cmps/sort-bar.cmp.js';
import filterBar from '../cmps/filter-bar.cmp.js';

export default {
    template: `
            <section class="search-section flex">
                <search-bar />     
                <sort-bar :term="sortBy"/>
                <filter-bar :term="'all'" @setFilter="emitFilterStatus"/>

            </section>
            `,
    data() {
        return {
            sortBy: 'date',
            searchBy: ''
        }
    },
    methods: {
        emitFilterStatus(filterTerm) {
            console.log('status of filter is:', filterTerm)
            this.$emit('setFilter', filterTerm)
        }
    },
    components: {
        searchBar,
        sortBar,
        filterBar
    }


}