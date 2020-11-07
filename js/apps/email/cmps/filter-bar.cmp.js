export default {
    props: ['term'],
    template: `
            <section class="filter-bar hide" title="Filter Emails">
                <input class="hide" type="radio" id="All" value="all" v-model="filterTerm">
                <label :class="" for="All" @click="emitFilterTerm('all')">All</label>

                <input class="hide" type="radio" id="Read" value="read" v-model="filterTerm">
                <label for="Read" @click="emitFilterTerm('read')">Read</label>

                <input class="hide" type="radio" id="Unread" value="unread" v-model="filterTerm">
                <label for="Unread" @click="emitFilterTerm('unread')">Unread</label>
            </section>
            `,
    data() {
        return {
            filterTerm: this.term,
            picked: null
        }
    },
    methods: {
        emitFilterTerm(term) {
            this.filterTerm = term;
            this.$emit('setFilter', term);
        }
    }
}