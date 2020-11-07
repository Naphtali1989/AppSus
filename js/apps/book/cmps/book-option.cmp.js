import { bookService } from '../book-service.js';
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js';

export default {
    name: 'book-option',
    props: ['book'],
    template: `
                <section class="book-option flex">
                    <img :src="imgUrl" />
                    <div class="book-option-details flex column">
                        <p>{{book.title}}</p>
                        <p>By: {{author}}</p>
                    <div>
                    <button class="add-book-btn btn" @click="addBook(book.id)">Add book to our list</button>
                </section>
                `,
    data() {
        return {

        }
    },
    computed: {
        author() {
            if (!this.book.authors || this.book.authors === undefined) return 'N/A';
            else if (this.book.authors.length === 1) return this.book.authors[0];
            else return this.book.authors.join(', ');
        },
        imgUrl() {
            return this.book.thumbnail;
        },
    },
    methods: {
        addBook(bookId) {
            bookService.addBookToDB(bookId)
                .then(res => {
                    const msg = {
                        txt: 'You have succesfully added this book to our collection!',
                        type: 'success'
                    }
                    eventBus.$emit(EVENT_SHOW_MSG, msg);
                })
        },
    },

}