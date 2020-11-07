import bookOption from './book-option.cmp.js';

export default {
    name: 'book-add-options',
    props: ['options'],
    template: `
                <section class="book-add-options">
                    <h3 >Here are some options to add:</h3>
                    <ul class="book-options clean-list">
                        <li v-for="option in options" :key="option.id" >
                            <book-option :book="option" />
                        </li>
                    </ul>
                </section>
                `,
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        bookOption,
    }
}