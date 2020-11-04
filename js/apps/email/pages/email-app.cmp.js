import searchSection from '../cmps/search-section.cmp.js';
// import { emailService } from '../email-service.js';

export default {
    name: 'email-app',
    template: `
            <section class="email-app">
                <search-section />
                <router-view />
            </section>
            `,
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {

    },
    created() {
        this.$router.push('/email/board')
    },

    components: {
        searchSection,

    }
}