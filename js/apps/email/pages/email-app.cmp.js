import searchSection from '../cmps/search-section.cmp.js';
import emailBoard from '../cmps/email-board.cmp.js';
import { emailService } from '../email-service.js';

export default {
    name: 'mail-app',
    template: `
            <section class="mail-app">
                <h1>mail-app</h1>
                <search-section />
                <email-board :emails="currMails"/>
<!-- {{currMails}} -->
            </section>
            `,
    data() {
        return {
            currMails: ''
        }
    },
    methods: {
        getMails() {
            emailService.getMailsToDisplay()
                .then(res => this.currMails = res)
        }
    },
    created() {
        this.getMails()
    },
    components: {
        searchSection,
        emailBoard,

    }
}