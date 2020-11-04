export default {
    props: ['mail'],
    template: `
            <section class="mail-preview">
                <button class="prioritize-btn" @click="">STAR<button>
                    <div class="mail-preview-subject">{{mail.subject}}</div>
                    <div class="mail-preview-body">{{mail.body}}</div>
            </section>
            `
}