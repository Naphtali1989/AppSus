import emailPreview from './email-preview.cmp.js';
// import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js';

export default {
    props: ['emails'],
    template: `
                <section class="email-list flex">
                    <ul class="clean-list flex column">
                        <transition-group name="slide-right">
                            <li v-for="emailItem in emails" :key="emailItem.id" @click="openEmail(emailItem.id)">
                                <email-preview :email="emailItem" @emailDeleted="emitEmailDeleted"/>
                            </li>
                        </transition-group> 
                    </ul>               
                </section>
            `,
    methods: {
        openEmail(emailId) {
            this.$router.push('/email/' + emailId);
        },
        emitEmailDeleted() {
            this.$emit('emailDeleted');

        }
    },
    components: {
        emailPreview,
    }
}