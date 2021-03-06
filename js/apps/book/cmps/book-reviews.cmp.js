import { bookService } from '../book-service.js';
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js';
import bookReview from './book-review.cmp.js'

export default {
    props: ['reviews', 'bookId'],
    template: `
        <section class="book-reviews">
            <ul class=" clean-list">
                <li v-for="review in reviews" :key="review.id" >
                    <book-review :review="review" @deleted="deleteReview"/>
                </li>
            </ul>
        </section>
    `,
    methods: {
        deleteReview(reviewId) {
            bookService.removeReview(reviewId, this.bookId)
                .then(res => {
                    this.book = res
                    const msg = {
                        txt: 'You have succesfully deleted this review!',
                        type: 'success'
                    }
                    eventBus.$emit(EVENT_SHOW_MSG, msg);
                    if (this.book.reviews.length < 1) this.$emit('outOfReviews')
                })
        }
    },
    components: {
        bookReview,
    }

}