import { emailService } from '../email-service.js';
import longTxt from './long-txt.cmp.js';
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js';

export default {
    props: ['email'],
    template: `
            <section class="email-preview flex align-center btn" :class="emailReadChecker">
                <button class="prioritize-btn btn" @click.stop="prioritizeEmail">
                    <i v-if="!email.isMarked" class="far fa-star" title="Mark as important"></i>
                    <i v-if="email.isMarked" class="fas fa-star email-marked" title="Unmark priority"></i>
                </button>
                <div class="email-preview-composer-name"><long-txt :txt="email.composer" :size="20" /></div>
                <div class="email-preview-subject"><long-txt :txt="email.subject" :size="35" /></div>
                <div class="email-preview-body hide"><long-txt :txt="email.body" :size="60" /></div>
                <div class="email-preview-time">{{emailTime}}</div>
                
                <div class="preview-btns flex hide"> 
                    <button class="email-delete-btn btn" @click.stop="deleteEmail" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="email-mark-btn btn " @click.stop="markEmail">
                        <i v-if="email.isRead" class="fas fa-envelope-open" title="Mark as unread"></i>
                        <i v-if="!email.isRead" class="fas fa-envelope" title="Mark as read"></i>
                    </button>
                </div>
            </section>
            `,
    methods: {
        deleteEmail() {
            emailService.deleteEmail(this.email.id)
                .then(() => {
                    eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Email has been deleted', type: 'success' });
                    this.$emit('emailDeleted')
                });
        },
        prioritizeEmail() {
            emailService.toggleEmailMark(this.email.id)
                .then(() => {
                    this.$emit('emailDeleted')
                });
            // .then(ans => { this.$emit('emailPrioritized') })
        },
        markEmail() {
            emailService.toggleEmailRead(this.email.id)
                .then(() => { this.$emit('emailDeleted') });
            // .then(ans => { this.$emit('emailMarked') })
        }
    },
    computed: {
        emailTime() {
            const sentTime = new Date(this.email.sentAt)
            const now = new Date()
            return moment(sentTime).from(moment(now))

        },
        emailReadChecker() {
            return { 'email-read': !this.email.isRead }
        }
    },
    components: {
        longTxt,
    }
}