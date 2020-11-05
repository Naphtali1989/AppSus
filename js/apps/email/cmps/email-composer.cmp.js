import composerContent from './composer-content.cmp.js';
import { emailService } from '../email-service.js';

export default {
    template: `
                <section class="email-composer flex column">
                    <div class="composer-head flex space-between btn" @click="toggleMinimize">
                        <h1 class="composer-title">New Message</h1>

                        <div class="composer-head-btns flex">
                            <button class="minimize-toggle-btn btn" @click.stop="toggleMinimize">
                                <i class="fas fa-window-minimize"></i>
                            </button>
                            <button class="maximize-toggle-btn btn" @click.stop="toggleMaximize">
                                <i class="fas fa-expand-arrows-alt"></i>
                                <i class="fas fa-compress-arrows-alt"></i>
                            </button>
                            <button class="composer-close-btn btn" @click.stop="emitStopCompose">
                                
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>  
                    
                    <composer-content :email="email" />

                </section>
            `,
    data() {
        return {
            email: ''
        }
    },
    methods: {
        toggleMinimize() {
            console.log('Not yet in!')
        },
        toggleMaximize() {
            console.log('Not yet in!')
        },
        emitStopCompose() {
            // TODO add in a save to drafts
            this.$emit('stopCompose')
        }
    },
    created() {
        this.email = emailService.getEmptyEmail();
        console.log('this email is:', this.email)
    },
    components: {
        composerContent,
    }
}