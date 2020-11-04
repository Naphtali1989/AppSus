import { emailService } from '../email-service.js';

export default {
    name: 'emailDetails',
    template: `
        <section class="email-details">
            <button class="email-display-close-btn btn" @click="closeEditMode">BACK</button>
            <div class="email-display-header flex space-between">
               <h1 class="email-display-title"> {{emailToDesplay.subject}}</h1>
               <div class="email-display-btns">
                   <button class="email-display-reply-btn btn">REPLY</button>
                   <button class="email-display-save-btn btn">SAVE</button>
                   <button class="email-display-delete-btn btn">DELETE</button>
               </div>
            </div>
            <div class="email-display-name">from: placeholder</div>
            <div class="email-display-body">{{emailToDesplay.body}}</div>
            {{emailToDesplay}}
        </section>
    `,
    data() {
        return {
            emailToDesplay: ''
        }
    },
    methods: {
        closeEditMode() {
            this.$router.push('/email/board')
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