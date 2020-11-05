import { emailService } from '../email-service.js';
import longTxt from './long-txt.cmp.js';

export default {
    props: ['email'],
    template: `
            <section class="email-preview flex align-center btn" :class="emailReadChecker">
                <button class="prioritize-btn btn" @click.stop="prioritizeEmail">
                    <i v-if="!email.isMarked" class="far fa-star" title="Mark as important"></i>
                    <i v-if="email.isMarked" class="fas fa-star marked" title="Unmark priority"></i>
                </button>
                <div class="email-preview-composer-name"><long-txt :txt="email.composer" :size="10" /></div>
                <div class="email-preview-subject"><long-txt :txt="email.subject" :size="20" /></div>
                <div class="email-preview-body"><long-txt :txt="email.body" :size="25" /></div>
                <div class="email-preview-time">{{emailTime}}</div>
                
                <button class="email-delete-btn btn" @click.stop="deleteEmail" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
                <button class="email-mark-btn btn" @click.stop="markEmail">
                    <i v-if="email.isRead" class="far fa-envelope-open" title="Mark as unread"></i>
                    <i v-if="!email.isRead" class="far fa-envelope" title="Mark as read"></i>
                </button>
            </section>
            `,
    methods: {
        deleteEmail() {
            emailService.deleteEmail(this.email.id);
            this.$emit('emailDeleted')
        },
        prioritizeEmail() {
            emailService.toggleEmailMark(this.email.id)
        },
        markEmail() {
            emailService.toggleEmailRead(this.email.id)
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