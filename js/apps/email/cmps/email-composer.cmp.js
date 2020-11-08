import composerContent from './composer-content.cmp.js';
import { emailService } from '../email-service.js';
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js';

export default {
    template: `
                <section :class="calcSize" class="email-composer flex column">
                    <div class="composer-head flex space-between btn" @click="toggleMinimize">
                        <h1 class="composer-title">New Message</h1>

                        <div class="composer-head-btns flex">
                            <button class="minimize-toggle-btn btn" @click.stop="toggleMinimize">
                                <i v-show="!isMinimized" class="fas fa-window-minimize"></i>
                                <i v-show="isMinimized" class="far fa-window-maximize"></i>
                            </button>
                            <button class="maximize-toggle-btn btn" @click.stop="toggleMaximize">
                                <i v-show="!isMaximized" class="fas fa-expand-arrows-alt"></i>
                                <i v-show="isMaximized" class="fas fa-compress-arrows-alt"></i>
                            </button>
                            <button class="composer-close-btn btn" @click.stop="saveToDrafts">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>  
                    
                    <composer-content :email="email" @deleteCompose="emitStopCompose" @saveEmailToSent="saveEmailToSent"/>

                </section>
            `,
    data() {
        return {
            email: '',
            isMinimized: false,
            isMaximized: false,
        }
    },
    computed: {
        calcSize() {
            return { minimized: this.isMinimized, maximized: this.isMaximized };
        }
    },
    methods: {
        toggleMinimize() {
            if (this.isMaximized) this.isMaximized = false;
            this.isMinimized = !this.isMinimized;
        },
        toggleMaximize() {
            if (this.isMinimized) this.isMinimized = false;
            this.isMaximized = !this.isMaximized;
        },
        saveToDrafts() {
            if (!this.email.subject) return this.emitStopCompose();
            emailService.saveEmailDraft(this.email)
                .then(res => {
                    this.emitStopCompose();
                    eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Email saved to drafts', type: 'success' });
                })
        },
        saveEmailToSent() {
            if (!this.email.subject) {
                eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Please write a Subject', type: 'error' });
                return
            }
            emailService.saveEmailSent(this.email)
                .then(res => {
                    this.emitStopCompose();
                    eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Email succesfully sent!', type: 'success' });
                })
        },
        emitStopCompose() {
            this.$emit('stopCompose');
        }
    },
    created() {
        this.email = emailService.getEmptyEmail();
        var details = this.$route.params.details;
        if (details && details !== 'null') {
            const { sentAt, subject, composer, body } = JSON.parse(details);
            this.email.subject = 'Re: ' + subject;
            this.email.body = `On ${sentAt} <${composer}> wrote:\n ${body}`;
            this.email.toName = composer;
        }
    },
    components: {
        composerContent,
    }
}