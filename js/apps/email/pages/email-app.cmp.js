import searchSection from '../cmps/search-section.cmp.js';
import emailBoard from '../cmps/email-board.cmp.js';
import { emailService } from '../email-service.js';

export default {
    name: 'email-app',
    template: `
            <section class="email-app">
                <h1>mail-app</h1>
                <search-section />
                <email-board :emails="currMails" @switchedNav="setEmailsToShow"/>
                <router-view />
            </section>
            `,
    data() {
        return {
            currMails: '',
            emailsToShow: 'inbox'
        }
    },
    methods: {
        setEmailsToShow(status) {
            console.log('status is: ', status)
            this.emailsToShow = status;
            switch (status) {
                case 'deleted':
                    this.getDeletedEmails();
                    break;
                case 'inbox':
                    this.getEmails();
                    break;
            }
        },
        getEmails() {
            emailService.getEmailsToDisplay()
                .then(res => this.currMails = res)
        },
        getDeletedEmails() {
            emailService.getDeletedEmailsToDisplay()
                .then(res => this.currMails = res)
        }
    },
    created() {
        this.getEmails();
    },
    updated() {
        // this.setEmailsToShow(this.emailsToShow)
    },
    components: {
        searchSection,
        emailBoard,
    }
}