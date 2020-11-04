import searchBar from '../cmps/search-bar.cmp.js';

export default {
    name: 'mail-app',
    template: `
            <section class="mail-app">
                <h1>mail-app</h1>
                <search-bar />
            </section>
            `,
    components: {
        searchBar,

    }

}