export default {
    props: ['email'],
    template: `
            <section class="email-preview">
                <button class="prioritize-btn" @click="">STAR</button>
                    <div class="email-preview-subject">{{email.subject}}</div>
                    <div class="email-preview-body">{{email.body}}</div>
            </section>
            `
}