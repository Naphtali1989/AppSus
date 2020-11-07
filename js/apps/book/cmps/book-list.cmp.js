import bookPreview from './book-preview.cmp.js';
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js'

export default {
    props: ['books'],
    template: `
        <section class="book-list">
            <ul class="clean-list">
                <li v-for="book in books" :key="book.id" >
                    <book-preview :book="book" @click.native="openDetails(book.id)" @deletedBook="emitDelete(book.id)"/>
                </li>
            </ul>
        </section>
    `,
    methods: {
        openDetails(bookId) {
            this.$router.push('/book/' + bookId);
        },
        emitDelete(bookId) {
            this.$emit('deleteBook', bookId)
            const msg = {
                txt: 'book deleted!',
                type: 'success'
            }
            eventBus.$emit(EVENT_SHOW_MSG, msg);
        }
    },
    components: {
        bookPreview,
    }
}