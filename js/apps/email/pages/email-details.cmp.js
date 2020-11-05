import { emailService } from '../email-service.js';
import { eventBus, SENT_REPLY_EMAIL } from '../../../services/event-bus-service.js';

export default {
    name: 'emailDetails',
    template: `
        <section class="email-details">
            <button class="email-display-close-btn btn" @click="closeDetailMode"><i class="fas fa-backspace"></i></button>
            <div class="email-display-header flex space-between">
               <h1 class="email-display-title"> {{emailToDesplay.subject}}</h1>
               <div class="email-display-btns">
                   <button class="email-display-reply-btn btn" @click="openReply"><i class="fas fa-reply"></i></button>
                   <button class="email-display-save-btn btn" @click="saveToNote"><i class="far fa-save"></i></button>
                   <button class="email-display-delete-btn btn" @click="deleteEmail"><i class="fas fa-trash"></i></button>
               </div>
            </div>
            <div class="email-display-name">from: {{emailToDesplay.composer}} <p class="muted-txt"><{{emailToDesplay.composerEmail}}></p></div>
            <div class="email-display-body">{{emailToDesplay.body}}</div>
        </section>
    `,
    data() {
        return {
            emailToDesplay: ''
        }
    },
    methods: {
        closeDetailMode() {
            this.$router.push('/email/board')
        },
        deleteEmail() {
            emailService.deleteEmail(this.emailToDesplay.id)
            this.closeDetailMode();
            // .then(res => {
            // })
        },
        openReply() {
            console.log('this email is:', this.emailToDesplay)
            const replyDetail = {
                composer: this.emailToDesplay.composerEmail,
                subject: this.emailToDesplay.subject,
                body: this.emailToDesplay.body,
                sentAt: this.emailToDesplay.sentAt
            }
            eventBus.$emit(SENT_REPLY_EMAIL, replyDetail)
        },
        saveToNote() {
            console.log('not yet in')
        }

    },
    created() {
        const id = this.$route.params.emailId;
        emailService.getEmailById(id)
            .then(res => this.emailToDesplay = res)
    },
    watch: {
        '$route.params.emailId' (to, from) {
            // console.log('the to is:', to, 'The from is:', from)
            emailService.getEmailById(to)
                .then(res => this.emailToDesplay = res)
        }
    }
}