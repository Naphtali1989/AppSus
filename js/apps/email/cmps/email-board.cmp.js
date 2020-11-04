import emailList from './email-list.cmp.js';
import emailNav from './email-nav.cmp.js';

export default {
    props: ['emails'],
    template: `
            <section class="email-board">
                <h1>email board:</h1>
                <email-list :emails="emails"/>
                <email-nav />

            </section>
            `,

    components: {
        emailList,
        emailNav,
    }
}