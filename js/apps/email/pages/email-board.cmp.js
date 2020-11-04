import { emailService } from '../email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailNav from '../cmps/email-nav.cmp.js';


export default {
    name: `emailBoard`,
    template: `
            <section class="email-board flex">
                <email-nav @switchedNav="setEmailsToShow" />
                <email-list :emails="currMails" />
            </section>
            `,
    data() {
        return {
            currMails: '',
            emailsToShow: 'inbox',
        }
    },
    components: {
        emailList,
        emailNav,
    },
    methods: {
        setEmailsToShow(status) {
            console.log('status is: ', status)
            if (status === 'isTrash') this.getDeletedEmails();
            else this.getEmails(status)
        },
        getEmails(filterBy = null) {
            emailService.getEmailsToDisplay(filterBy)
                .then(res => this.currMails = res)
        },
        getDeletedEmails() {
            emailService.getDeletedEmailsToDisplay()
                .then(res => this.currMails = res)
        },
    },
    created() {
        this.getEmails();
    },
}