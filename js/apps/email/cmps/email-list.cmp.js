import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `
                <section class="email-list">
                    <ul class="clean-list">
                        <li v-for="emailItem in mails" :key="emailItem.id">
                            <mail-preview :email="emailItem"/>
                        </li>
                        {{emails}}
                    </ul>               
                </section>
            `,
    components: {
        emailPreview,
    }
}