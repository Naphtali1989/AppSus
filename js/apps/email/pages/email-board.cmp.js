import { emailService } from '../email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import { eventBus, SET_FILTER, SET_SORT, SET_SEARCH } from '../../../services/event-bus-service.js';


export default {
    name: `emailBoard`,
    template: `
            <section class="email-board flex column">
                <email-list :emails="currMailsShowing"  @emailDeleted="refreshEmails"/>
            </section>
            `,
    data() {
        return {
            currEmails: '',
            filterBy: null,
            searchBy: '',

        }
    },
    computed: {
        currMailsShowing() {
            if (!this.searchBy.length) return this.currEmails;
            return this.currEmails.filter(email => {
                return email.subject.toLowerCase().includes(this.searchBy.toLowerCase()) ||
                    email.composer.toLowerCase().includes(this.searchBy.toLowerCase());
            });
        }
    },
    methods: {
        refreshEmails() {
            this.getEmails(this.filterBy)
            eventBus.$emit('emailsRefreshed')
        },
        setEmailsToShow(status) {
            this.getEmails(status)
        },
        getEmails(filterBy = null) {
            this.filterBy = filterBy
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
            emailService.setSortEmailsBy(sortBy)
                .then(res => { this.getEmails(this.emailsToShow) })
        });
        eventBus.$on(SET_SEARCH, searchBy => {
            this.searchBy = searchBy;
        });
        console.log('this is the route', this.$route.params)

    },
    components: {
        emailList,
    },
}