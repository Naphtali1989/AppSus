export default {
    name: 'noteFilter',
    template: `
                <section>
                    <!-- <form @submit.prevent="emitFilter"> -->
                        <input type="text" v-model.trim="filterBy.txt" @input="emitFilter"/>
                        <select v-model="filterBy.type" @change="emitFilter">
                            <option value="all">All</option>
                            <option value="noteTxt">Text</option>
                            <option value="noteImg">Images</option>
                            <option value="noteVideo">Videos</option>
                        </select>
                        <!-- <button>Submit</button> -->
                    <!-- </form> -->
                </section>
        `,
    data() {
        return {
            filterBy: { txt: '', type: 'nodeTxt' }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', this.filterBy);
        }
    }
}