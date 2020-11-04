import mailPreview from './mail-preview.cmp.js';

export default {
    props: ['mails'],
    template: `
                <section class="mail-list">
                    <ul class="clean-list">
                        <li v-for="mailItem in mails" :key="mailItem.id">
                            <mail-preview :mail="mailItem"/>
                        </li>
                        {{mails}}
                    </ul>               
                </section>
            `,
    components: {
        mailPreview,
    }
}