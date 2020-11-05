import { eventBus } from '../../../services/event-bus-service.js';

export default {
    template: `
            <section class="email-nav flex column">
                <button class="new-email-open-btn btn" @click="emitCompose">+ Compose</button>
                <ul class="clean-list email-navbar">
                    <li :class="{focused:!focusOn}" class="inbox-navigator btn" @click="emitNavChange()"><i class="fas fa-inbox"></i> Inbox</li>
                    <li :class="{focused:focusOn==='isMarked'}" class="starred-navigator btn" @click="emitNavChange('isMarked')"><i class="fas fa-star"></i> Starred</li>
                    <li :class="{focused:focusOn==='isSent'}" class="sent-navigator btn" @click="emitNavChange('isSent')"><i class="fas fa-share-square"></i> Sent</li>
                    <li :class="{focused:focusOn==='isDraft'}" class="drafts-navigator btn" @click="emitNavChange('isDraft')"><i class="fab fa-firstdraft"></i> Drafts</li>
                    <li :class="{focused:focusOn==='isTrash'}" class="trash-navigator btn" @click="emitNavChange('isTrash')"><i class="fas fa-trash"></i> Trash</li>
                </ul>
            </section>
            `,
    data() {
        return {
            focusOn: null
        }
    },
    methods: {
        emitCompose() {
            this.$emit('startCompose')
        },
        emitNavChange(status = null) {
            this.focusOn = status;
            eventBus.$emit('switchedNav', status);
        }
    },
    computed: {

    }
}