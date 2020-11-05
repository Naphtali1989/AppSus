import composerContent from './composer-content.cmp.js';
import { emailService } from '../email-service.js';

export default {
    // props: [''],
    template: `
                <section class="email-composer flex column">
                    <div class="composer-head flex space-between btn" @click="toggleMinimize">
                        <h1 class="composer-title">New Message</h1>

                        <div class="composer-head-btns flex">
                            <button class="minimize-toggle-btn btn" @click.stop="toggleMinimize">_</button>
                            <button class="maximize-toggle-btn btn" @click.stop="toggleMaximize">Max</button>
                            <button class="composer-close-btn btn" @click.stop="emitStopCompose">X</button>
                        </div>
                    </div>  
                    
                    <composer-content :email="email" />

                </section>
            `,
    methods: {
        toggleMinimize() {
            console.log('Not yet in!')
        },
        toggleMaximize() {
            console.log('Not yet in!')
        },
        emitStopCompose() {
            console.log('Not yet in!')
            this.$emit('stopCompose')
        }
    },
    created() {
        this.email = emailService.getEmptyEmail();
    },
    components: {
        composerContent,
    }
}