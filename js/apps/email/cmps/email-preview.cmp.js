import { emailService } from '../email-service.js'

export default {
    props: ['email'],
    template: `
            <section class="email-preview flex space-between btn">
                <button class="prioritize-btn btn" @click.stop="prioEmail">
                    <span class="far fa-star"></span>
                    <span class="fas fa-star"></span>
                </button>
                <div class="email-preview-subject">{{email.subject}}</div>
                <div class="email-preview-body">{{email.body}}</div>
                
                <button class="email-delete-btn btn" @click.stop="deleteEmail">
                    <span class="far fa-trash-alt"></span>
                    <span class="fas fa-trash-alt"></span>
                </button>
                <button class="email-mark-btn btn" @click.stop="markEmail">
                    <span class="far fa-envelope-open"></span>
                    <span class="far fa-envelope"></span>
                </button>
            </section>
            `,
    methods: {
        deleteEmail() {
            console.log('deleting the email:', this.email)
            emailService.deleteEmail(this.email.id)
        },
        prioEmail() {
            console.log('making this email prio:', this.email)
        },
        markEmail() {
            console.log('marking email:', this.email)
        }
    }
}