import { eventBus } from '../../../services/event-bus-service.js';
import { emailService } from '../email-service.js';

export default {
    template: `
            <section class="email-nav flex column">
                <button class="new-email-open-btn btn" @click="emitCompose"><img src="./assets/email/img/icon/create_32dp.png" /></button>
                <ul class="email-nav-list clean-list flex space-between">
                    <li :class="{focused:!focusOn}" class="inbox-navigator btn" @click="emitNavChange()">
                        <i class="fas fa-inbox"></i><span v-if="showUnreads" class="span-for-read hide">{{totalUnreads}}</span>
                    </li>
                    <li :class="{focused:focusOn==='isMarked'}" class="starred-navigator btn" @click="emitNavChange('isMarked')">
                        <i class="fas fa-star"></i>
                    </li>
                    <li :class="{focused:focusOn==='isSent'}" class="sent-navigator btn" @click="emitNavChange('isSent')">
                        <i class="fas fa-share-square"></i> 
                    </li>
                    <li :class="{focused:focusOn==='isDraft'}" class="drafts-navigator btn" @click="emitNavChange('isDraft')">
                        <i class="fab fa-firstdraft"></i>
                    </li>
                    <li :class="{focused:focusOn==='isTrash'}" class="trash-navigator btn" @click="emitNavChange('isTrash')">
                        <i class="fas fa-trash"></i>
                    </li>
                </ul>
            </section>
            `,
    data() {
        return {
            focusOn: null,
            showUnreads: true,
            unread: null
        }
    },
    computed: {
        totalUnreads() {
            if (this.unread === 0) return ''
            return this.unread
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
    created() {
        this.unread = emailService.updateUnreads()
        eventBus.$on('emailsRefreshed', () => {
            this.unread = emailService.updateUnreads()
        })
    }
}