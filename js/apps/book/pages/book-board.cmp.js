import { bookService } from '../book-service.js';
import bookList from '../cmps/book-list.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';


export default {
    template: `
         <section v-if="books" class="book-board">
             <h2 class="secondary-title">Find your books</h2>
             <book-filter  @filtered="setFilter"/>
             <book-list :books="booksToShow" @deleteBook="deleteBook"/>
         </section>
         `,
    data() {
        return {
            books: null,
            filterBy: null,
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const txt = this.filterBy.byName.toLowerCase();
            return this.books.filter(book => book.title.toLowerCase().includes(txt) &&
                (
                    book.listPrice.amount > this.filterBy.fromPrice &&
                    book.listPrice.amount < this.filterBy.toPrice
                )
            )
        },
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        deleteBook(bookId) {
            bookService.removeBookFromDB(bookId)
                .then(res => {
                    bookService.getBooks()
                        .then(books => this.books = books)
                })
        }
    },
    created() {
        bookService.getBooks()
            .then(books => this.books = books)
    },
    components: {
        bookList,
        bookFilter,
    }
}