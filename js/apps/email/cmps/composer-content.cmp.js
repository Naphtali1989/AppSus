import { emailService } from '../email-service.js';

export default {
    props: ['email'],
    template: `
                <section class="composer-content flex column">

                    <div class="composer-content-head flex">
                        <h1 class="composer-email-subject">Subject:</h1>
                        <input class="composer-email-subject-txt" type="text" v-model="email.subject" />
                    </div>
                    
                    <div class="composer-content-subhead flex">
                        <h1 class="composer-email-sent-to">To:</h1>
                        <input class="composer-email-sent-to-txt" type="text" v-model="email.subject" />
                    </div>
                    
                    <div class="composer-content-body flex">
                        <textarea class="composer-email-body-txt" width="100%" type="text" v-model="email.body"> </textarea>
                    </div>

                        <div class="composer-head-btns flex">
                            
                            <button class="email-send btn" @click="">Send</button>
                            <button class="email-composer-close btn" @click="">DELETE</button>
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