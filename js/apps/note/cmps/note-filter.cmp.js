import mainNavBtn from '../../cmps/main-nav-btn.cmp.js';

export default {
    name: 'noteFilter',
    template: `
                <section class="note-filter-container flex">
                    <main-nav-btn />
                    <section class="note-filter">
                            <i class="fas fa-search btn" @click="emitFilter"></i>  
                            <input type="search" v-model.trim="filterBy.txt" @input="emitFilter" placeholder="search.."/>
                            <select v-model="filterBy.type" @change="emitFilter" name="noteFilter">
                                <option value="all">All</option>
                                <option value="noteTxt">Text</option>
                                <option value="noteImg">Images</option>
                                <option value="noteVideo">Videos</option>
                            </select>
                    </section>
                </section>
        `,
    data() {
        return {
            filterBy: { txt: '', type: 'all' }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', this.filterBy);
        }
    },
    components: {
        mainNavBtn
    }
}