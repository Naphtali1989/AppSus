import emailList from './email-list.cmp.js';
import emailNav from './email-nav.cmp.js';

export default {
    props: ['emails'],
    template: `
            <section class="email-board flex">
                <email-nav />
                <email-list :emails="emails"/>
            </section>
            `,

    components: {
        emailList,
        emailNav,
    }
}