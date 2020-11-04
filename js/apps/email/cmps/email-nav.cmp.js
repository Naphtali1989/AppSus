export default {
    template: `
            <section class="email-nav">
                <button class="new-email-open-btn btn" @click="openNewEmail">+ Compose</button>
                <ul class="clean-list email-navbar">
                    <li class="inbox-navigator btn">Inbox</li>
                    <li class="starred-navigator btn">Starred</li>
                    <li class="sent-navigator btn">Sent</li>
                    <li class="drafts-navigator btn">Drafts</li>
                    <li class="trash-navigator btn">Trash</li>
                </ul>
            </section>
            `,
    methods: {
        openNewEmail() {
            console.log('writing a new mail!')
        }
    }
}