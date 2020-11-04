import { emailService } from '../email-service.js'

export default {
    props: ['email'],
    template: `
            <section class="email-preview flex space-between btn">
                <button class="prioritize-btn btn" @click.stop="prioritizeEmail">
                    <span v-if="!email.isMarked" class="far fa-star"></span>
                    <span v-if="email.isMarked" class="fas fa-star"></span>
                </button>
                <div class="email-preview-subject">{{email.subject}}</div>
                <div class="email-preview-body">{{email.body}}</div>
                <div class="email-preview-time">{{emailTime}}</div>
                
                <button class="email-delete-btn btn" @click.stop="deleteEmail">
                    <span class="far fa-trash-alt"></span>
                    <span class="fas fa-trash-alt"></span>
                </button>
                <button class="email-mark-btn btn" @click.stop="markEmail">
                    <span v-if="!email.isRead" class="far fa-envelope-open"></span>
                    <span v-if="email.isRead" class="far fa-envelope"></span>
                </button>
            </section>
            `,
    methods: {
        deleteEmail() {
            emailService.deleteEmail(this.email.id);
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

        }
    }
}