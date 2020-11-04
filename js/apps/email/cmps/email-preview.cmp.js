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
            console.log('deleting the email:', this.email)
            emailService.deleteEmail(this.email.id)
        },
        prioritizeEmail() {
            console.log('making this email prio:', this.email)
            this.email.isMarked = !this.email.isMarked

        },
        markEmail() {
            console.log('marking email:', this.email)
            this.email.isRead = !this.email.isRead
        }
    }
}