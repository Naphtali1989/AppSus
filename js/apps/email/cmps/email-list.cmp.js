import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `
                <section class="email-list flex">
                    <ul class="clean-list flex column">
                        <li v-for="emailItem in emails" :key="emailItem.id" @click="openEmail(emailItem.id)">
                            <email-preview :email="emailItem" @emailDeleted="emitEmailDeleted"/>
                        </li>
                    </ul>               
                </section>
            `,
    methods: {
        openEmail(emailId) {
            this.$router.push('/email/' + emailId)
        },
        emitEmailDeleted() {
            this.$emit('emailDeleted')
        }
    },
    components: {
        emailPreview,
    }
}