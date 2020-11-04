import { emailService } from '../email-service.js';

export default {
    name: 'emailDetails',
    template: `
        <section class="email-details">
            <h1>This is the details!</h1>
            {{emailToDesplay}}
        </section>
    `,
    data() {
        return {
            emailToDesplay: ''
        }
    },
    created() {
        const id = this.$route.params.emailId;
        emailService.getEmailById(id)
            .then(res => this.emailToDesplay = res)
    }
}