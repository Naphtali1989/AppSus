import searchSection from '../cmps/search-section.cmp.js';
import emailNav from '../cmps/email-nav.cmp.js';
import emailComposer from '../cmps/email-composer.cmp.js';
import { eventBus, SENT_REPLY_EMAIL } from '../../../services/event-bus-service.js';

// import { emailService } from '../email-service.js';

export default {
    name: 'email-app',
    template: `
            <section class="email-app">
                <search-section />

                <div class="main-email-content flex column">
                    <email-nav @startCompose="toggleComposer" />
                    <!-- <transition name="slide-right"> -->
                        <router-view />
                    <!-- </transition > -->
                </div>
                <transition name="slide">
                    <email-composer v-if="showComposer" @stopCompose="toggleComposer"/>
                </transition>
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
            eventBus.$emit('emailsRefreshed')
            this.$router.push('/email/board/' + JSON.stringify(detail))
        },
    },
    created() {
        if (Object.keys(this.$route.query).length === 0) {
            this.$router.push('/email/board');
        } else {
            this.toggleComposer(this.$route.query)
        }
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