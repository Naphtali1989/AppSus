import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `
                <section class="email-list">
                    <ul class="clean-list flex column">
                        <li  v-for="emailItem in emails" :key="emailItem.id" @click="openEmail(emailItem.id)">
                            <email-preview :email="emailItem" />
                        </li>
                    </ul>               
                </section>
            `,
    methods: {
        openEmail(emailId) {
            console.log(emailId)
            this.$router.push('/email/' + emailId)
        }
    },
    components: {
        emailPreview,
    }
}