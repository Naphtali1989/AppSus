import searchSection from '../cmps/search-section.cmp.js';
import emailNav from '../cmps/email-nav.cmp.js';
import emailComposer from '../cmps/email-composer.cmp.js';
// import { emailService } from '../email-service.js';

export default {
    name: 'email-app',
    template: `
            <section class="email-app">
                <search-section />
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
        toggleComposer() {
            console.log('lets start composing', this.isComposing)
            this.isComposing = !this.isComposing
        }
    },
    created() {
        this.$router.push('/email/board')
    },

    components: {
        searchSection,
        emailNav,
        emailComposer
    }
}