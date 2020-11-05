import { emailService } from '../email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailNav from '../cmps/email-nav.cmp.js';


export default {
    name: `emailBoard`,
    template: `
            <section class="email-board flex">
                <email-nav @switchedNav="setEmailsToShow" />
                <email-list :emails="currMails"  @bookDeleted="refreshEmails"/>
            </section>
            `,
    data() {
        return {
            currMails: '',
            emailsToShow: null,
        }
    },
    components: {
        emailList,
        emailNav,
    },
    methods: {
        refreshEmails() {
            this.getEmails(this.emailsToShow)
        },
        setEmailsToShow(status) {
            this.getEmails(status)
        },
        getEmails(filterBy = null) {
            this.emailsToShow = filterBy
            emailService.getEmailsToDisplay(filterBy)
                .then(res => this.currMails = res)
        },
    },
    created() {
        this.getEmails();
    },
}