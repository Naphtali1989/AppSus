import mainNavBtn from '../../cmps/main-nav-btn.cmp.js';
export default {
    template: `
         <section class="book-app flex column">
             <div class="book-header-container flex">
                <main-nav-btn />
                <router-link class="add-new-books-btn btn" to="/book/adder">Add new books</router-link>
                <router-link class="show-books-btn btn" to="/book/board">Show our books</router-link>
            </div>
            
             <router-view/>

         </section>
         `,
    data() {
        return {

        }
    },
    computed: {

    },

    methods: {

    },
    created() {

    },
    components: {
        mainNavBtn
    }
}