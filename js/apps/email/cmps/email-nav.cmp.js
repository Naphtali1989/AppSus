export default {
    template: `
            <section class="email-nav">
                <button class="new-email-open-btn btn" @click="openNewEmail">+ Compose</button>
                <ul class="clean-list email-navbar">
                    <li class="inbox-navigator btn" @click="emitNavChange()">Inbox</li>
                    <li class="starred-navigator btn" @click="emitNavChange('isMarked')">Starred</li>
                    <li class="sent-navigator btn" @click="emitNavChange('isSent')">Sent</li>
                    <li class="drafts-navigator btn" @click="emitNavChange('isDraft')">Drafts</li>
                    <li class="trash-navigator btn" @click="emitNavChange('isTrash')">Trash</li>
                </ul>
            </section>
            `,
    methods: {
        openNewEmail() {
            console.log('writing a new mail!')
        },
        emitNavChange(status = null) {
            this.$emit('switchedNav', status)
        }
    }
}