import mailList from './mail-list.cmp.js';
// import mailList from './mail-list.cmp.js';

export default {
    props: ['emails'],
    template: `
            <section class="mail-board">
                <h1>mail board:</h1>
                <mail-list :mails="emails"/>

            </section>
            `,

    components: {
        mailList,
    }
}