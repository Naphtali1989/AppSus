import { emailService } from '../email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';


export default {
    name: `emailBoard`,
    template: `
            <section class="email-board flex">
                <email-list :emails="currMailsShowing"  @bookDeleted="refreshEmails"/>
            </section>
            `,
    data() {
        return {
            currMails: '',
            emailsToShow: null,
        }
    },
    computed: {
        currMailsShowing() {
            return this.currMails
        }
    },
    methods: {
        refreshEmails() {
            // this.$router.push('/email')
            console.log('refreshing!')
            eventBus.$emit('switchedNav', this.emailsToShow);
            // this.setEmailsToShow(this.emailsToShow)
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
        eventBus.$on('switchedNav', status => {
            this.$router.push('/email/board')
            this.getEmails(status)
        })
    },
    components: {
        emailList,
    },
}