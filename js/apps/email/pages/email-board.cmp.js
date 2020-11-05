import { emailService } from '../email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import { eventBus, SET_FILTER, SET_SORT } from '../../../services/event-bus-service.js';


export default {
    name: `emailBoard`,
    template: `
            <section class="email-board flex">
                <email-list :emails="currEmails"  @emailDeleted="refreshEmails"/>
            </section>
            `,
    data() {
        return {
            currEmails: '',
            emailsToShow: null,
        }
    },
    computed: {
        currMailsShowing() {
            return this.getEmails(this.emailsToShow)
        }
    },
    methods: {
        refreshEmails() {
            this.getEmails(this.emailsToShow)
                // eventBus.$emit('switchedNav', this.emailsToShow);
                // this.setEmailsToShow(this.emailsToShow)
        },
        setEmailsToShow(status) {
            this.getEmails(status)
        },
        getEmails(filterBy = null) {
            this.emailsToShow = filterBy
            console.log('refreshing!', filterBy)
            emailService.getEmailsToDisplay(filterBy)
                .then(res => this.currEmails = res)
        },
    },
    created() {
        this.getEmails();
        eventBus.$on('switchedNav', status => {
            this.$router.push('/email/board')
            this.getEmails(status)
        });
        eventBus.$on(SET_FILTER, filterBy => {
            var status;
            if (filterBy === 'all') status = null;
            else if (filterBy === 'read') status = 'isRead';
            else status = '!isRead';
            this.getEmails(status)
        });
        eventBus.$on(SET_SORT, sortBy => {
            console.log('Sorting by:', sortBy)
            emailService.setSortEmailsBy(sortBy)
                // var status;
                // if (filterBy === 'all') status = null;
                // else if (filterBy === 'read') status = 'isRead';
                // else status = '!isRead';
                .then(res => {
                    this.getEmails(this.emailsToShow)
                })
        });
    },
    components: {
        emailList,
    },
}