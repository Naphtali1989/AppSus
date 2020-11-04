import emailList from './email-list.cmp.js';
// import mailList from './mail-list.cmp.js';

export default {
    props: ['emails'],
    template: `
            <section class="email-board">
                <h1>email board:</h1>
                <email-list :emails="emails"/>

            </section>
            `,

    components: {
        emailList,
    }
}