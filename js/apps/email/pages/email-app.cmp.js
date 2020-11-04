import searchSection from '../cmps/search-section.cmp.js';
import mailBoard from '../cmps/mail-board.cmp.js';
import { mailService } from '../mail-services/mail-service.js'

export default {
    name: 'mail-app',
    template: `
            <section class="mail-app">
                <h1>mail-app</h1>
                <search-section />
                <mail-board :emails="currMails"/>
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
            mailService.getMailsToDisplay()
                .then(res => this.currMails = res)
        }
    },
    created() {
        this.getMails()
    },
    components: {
        searchSection,
        mailBoard,

    }
}