import searchSection from '../cmps/search-section.cmp.js';
import emailNav from '../cmps/email-nav.cmp.js';
// import { emailService } from '../email-service.js';

export default {
    name: 'email-app',
    template: `
            <section class="email-app">
                <search-section />
                <div class="flex">
                <email-nav @switchedNav="setEmailsToShow" />
                    <router-view />
                </div>
            </section>
            `,
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        setEmailsToShow(status) {
            console.log('', status)
                // this.$router.push('/email/board', )
        }
    },
    created() {
        this.$router.push('/email/board')
    },

    components: {
        searchSection,
        emailNav
    }
}