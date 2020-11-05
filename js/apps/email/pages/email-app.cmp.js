import searchSection from '../cmps/search-section.cmp.js';
import emailNav from '../cmps/email-nav.cmp.js';
import emailComposer from '../cmps/email-composer.cmp.js';
import { eventBus, SENT_REPLY_EMAIL, SET_FILTER } from '../../../services/event-bus-service.js';
// import { emailService } from '../email-service.js';

export default {
    name: 'email-app',
    template: `
            <section class="email-app">
                <search-section @setFilter="emitSetFilter" />
                <div class="flex">
                    <email-nav @startCompose="toggleComposer" />
                    <router-view />
                </div>
                <email-composer v-if="showComposer" @stopCompose="toggleComposer"/>
            </section>
            `,
    data() {
        return {
            isComposing: false,
        }
    },
    computed: {
        showComposer() {
            return this.isComposing
        },
    },
    methods: {
        toggleComposer(detail = null) {
            this.isComposing = !this.isComposing
            this.$router.push('/email/board/' + JSON.stringify(detail))
        },
        emitSetFilter(filterBy) {
            eventBus.$emit(SET_FILTER, filterBy)
        }
    },
    created() {
        this.$router.push('/email/board');
        eventBus.$on(SENT_REPLY_EMAIL, detail => {
            this.toggleComposer(detail)
        })

    },

    components: {
        searchSection,
        emailNav,
        emailComposer
    }
}