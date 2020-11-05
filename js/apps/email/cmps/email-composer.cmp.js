import composerContent from './composer-content.cmp.js';
import { emailService } from '../email-service.js';

export default {
    template: `
                <section :class="calcMini" class="email-composer flex column">
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
        calcMini() {
            return { minimized: this.isMinimized }
        }
    },
    methods: {
        toggleMinimize() {
            this.isMinimized = !this.isMinimized
        },
        toggleMaximize() {
            console.log('Not yet in!')
        },
        saveToDrafts() {
            console.log(this.email.subject)
            if (!this.email.subject) return this.emitStopCompose();
            emailService.saveEmailDraft(this.email)
                .then(res => {
                    this.emitStopCompose();
                })
        },
        saveEmailToSent() {
            console.log(this.email.subject)
            if (!this.email.subject) return
            emailService.saveEmailSent(this.email)
                .then(res => {
                    this.emitStopCompose();
                })
        },
        emitStopCompose() {
            this.$emit('stopCompose')
        }
    },
    created() {
        this.email = emailService.getEmptyEmail();
        const details = JSON.parse(this.$route.params.details);
        if (details) {
            this.email.subject = details.subject
        }
        console.log(JSON.parse(details))
    },
    components: {
        composerContent,
    }
}