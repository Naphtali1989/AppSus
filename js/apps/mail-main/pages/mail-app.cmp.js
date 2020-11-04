import searchSection from '../cmps/search-section.cmp.js';

export default {
    name: 'mail-app',
    template: `
            <section class="mail-app">
                <h1>mail-app</h1>
                <search-section />
                
            </section>
            `,
    components: {
        searchSection,

    }

}