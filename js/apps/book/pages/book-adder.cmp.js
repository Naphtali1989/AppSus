import { bookService } from '../book-service.js';
import bookAddOptions from '../cmps/book-add-options.cmp.js';

export default {
    name: 'book-adder',
    template: `
         <section class="book-adder flex column">
             <h2 class="secondary-title">Add books here</h2>
             <input ref="txtInput" type="search" placeholder="Search by book name" title="Required" class="book-adder-search-txt-input" v-model="term"/>
             <input type="search" placeholder="Search by author" class="book-adder-search-auth-input" title="Not Required" v-model="author"/> 
             <button class="submit-google-search-btn btn" @click="activateGoogleSearch">Search with 
                <span class="google-brand">G</span> 
                <span class="google-brand">o</span> 
                <span class="google-brand">o</span> 
                <span class="google-brand">g</span> 
                <span class="google-brand">l</span> 
                <span class="google-brand">e</span> 
                </button>

             <book-add-options :options="results" v-if="results" />

         </section>
         `,
    data() {
        return {
            term: null,
            author: null,
            results: null
        }
    },
    computed: {

    },
    methods: {
        activateGoogleSearch() {
            if (!this.term) return console.log('no term stated!')
            bookService.queryGoogleBooks(this.term, this.author)
                .then(res => this.results = res)
        }
    },
    mounted() {
        this.$refs.txtInput.focus();
    },
    components: {
        bookAddOptions,
    }
}