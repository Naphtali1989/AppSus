import searchBar from '../cmps/search-bar.cmp.js';
import sortBar from '../cmps/sort-bar.cmp.js';
import filterBar from '../cmps/filter-bar.cmp.js';
import mainNavBtn from '../../cmps/main-nav-btn.cmp.js';
import { eventBus, SET_FILTER, SET_SORT, SET_SEARCH } from '../../../services/event-bus-service.js';

export default {
    template: `
            <section class="search-section flex">
                 <main-nav-btn />
                 <!-- <div class="search-container flex"> -->
                    <search-bar  @setSearch="emitSetSearch"/>     
                    <sort-bar :term="'date'" @setSort="emitSetSort"/>
                    <filter-bar :term="'all'" @setFilter="emitSetFilter"/>
                <!-- </div> -->
            </section>
            `,
    data() {
        return {
            searchBy: '',

        }
    },
    methods: {
        emitSetFilter(filterBy) {
            eventBus.$emit(SET_FILTER, filterBy)
        },
        emitSetSort(sortBy) {
            eventBus.$emit(SET_SORT, sortBy)
        },
        emitSetSearch(searchBy) {
            eventBus.$emit(SET_SEARCH, searchBy)
        },


    },
    components: {
        searchBar,
        sortBar,
        filterBar,
        mainNavBtn
    }


}