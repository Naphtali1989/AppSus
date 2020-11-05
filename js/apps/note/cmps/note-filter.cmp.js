export default {
    name: 'noteFilter',
    template: `
                <section class="note-filter">
                        <input type="text" v-model.trim="filterBy.txt" @input="emitFilter" placeholder="search.."/>
                        <select v-model="filterBy.type" @change="emitFilter">
                            <option value="all">All</option>
                            <option value="noteTxt">Text</option>
                            <option value="noteImg">Images</option>
                            <option value="noteVideo">Videos</option>
                        </select>
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
    }
}