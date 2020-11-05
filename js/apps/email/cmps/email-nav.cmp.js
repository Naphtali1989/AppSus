import { eventBus } from '../../../services/event-bus-service.js';

export default {
    template: `
            <section class="email-nav flex column">
                <button class="new-email-open-btn btn" @click="emitCompose">+ Compose</button>
                <ul class="clean-list email-navbar">
                    <li class="inbox-navigator btn" @click="emitNavChange()"><i class="fas fa-inbox"></i> Inbox</li>
                    <li class="starred-navigator btn" @click="emitNavChange('isMarked')"><i class="fas fa-star"></i> Starred</li>
                    <li class="sent-navigator btn" @click="emitNavChange('isSent')"><i class="fas fa-share-square"></i> Sent</li>
                    <li class="drafts-navigator btn" @click="emitNavChange('isDraft')"><i class="fab fa-firstdraft"></i> Drafts</li>
                    <li class="trash-navigator btn" @click="emitNavChange('isTrash')"><i class="fas fa-trash"></i> Trash</li>
                </ul>
            </section>
            `,
    methods: {
        emitCompose() {
            this.$emit('startCompose')
            console.log('Whats wrong with this????')

        },
        emitNavChange(status = null) {
            eventBus.$emit('switchedNav', status);
        }
    }
}