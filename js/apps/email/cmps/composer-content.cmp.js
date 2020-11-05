import { emailService } from '../email-service.js';

export default {
    props: ['email'],
    template: `
                <section class="composer-content flex column">

                        <label class="composer-content-head flex">
                            <h1 class="composer-email-subject">Subject:</h1>
                            <input class="composer-email-subject-txt" type="text" v-model="email.subject" />
                        </label>
                    
                        <label class="composer-content-subhead flex">
                            <h1 class="composer-email-sent-to">To:</h1>
                            <input class="composer-email-sent-to-txt" type="text" v-model="email.subject" />
                        </label>
                        
                        <div class="composer-content-body flex">
                            <textarea class="composer-email-body-txt"  type="text" v-model="email.body"> </textarea>
                        </div>

                        <div class="composer-footer-btns flex space-between">
                            <button class="email-send btn" @click="">Send  <i class="fas fa-paper-plane"></i> </button>
                            <button class="email-composer-close-btn btn" @click=""><i class="fas fa-trash"></i></button>
                        </div>
                      
                </section>
            `,
    methods: {

    },
    created() {

    },
    components: {

    }
}