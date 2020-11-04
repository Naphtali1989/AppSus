export default {
    name: 'noteFilter',
    template: `
                <section>
                    <form>
                        <input type="text" v-model.trim="filterBy.byText"/>
                        <select v-model="filterBy.byNoteType">
                            <option value="noteTxt">Text</option>
                            <option value="noteImg">Images</option>
                            <option value="noteVideo">Videos</option>
                        </select>
                    </form>
                </section>
        `,
    data() {
        return {
            filterBy: { byText: '', byNoteType: 'nodeTxt' }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', this.filterBy);
        }
    }
}