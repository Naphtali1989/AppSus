import { bookService } from '../book-service.js';
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js';

export default {
    props: ['book'],
    template: `
            <section class="review-section">
                <form>
                    <p>Your name:</p>
                    <input ref="theInput" type="text" placeholder="Enter your name please" v-model.trim="reviewerName" />
                    <p>Read at:</p>
                    <input type="date" v-model="readOn" />
                    <p>Would you like to tell us more?</p>
                    <textarea type="text" maxLength="320" rows="5" placeholder="Enter your review please" v-model.trim="currReview" ></textarea>
                    
                    <section class="ratings-section" >
                        <a v-for="index in 5" 
                        class="far fa-star" 
                        :class="{ 'fas fa-star checked': rating >= index }" 
                        @click="rateThis(index)"></a>
                    </section>
                    
                    <div class="form-submit-btns flex">
                        <button class="review-submit-btn btn" @click.prevent="saveReview">Submit review</button>
                        <button class="review-cancel-btn btn" @click="closeReview">cancel</button>
                    </div>
                </form>
            </section>
    `,
    data() {
        return {
            reviewerName: 'Book reader',
            currReview: '',
            rating: 0,
            readOn: new Date().toISOString().substr(0, 10),
            isReviewing: false,
        }
    },
    methods: {
        saveReview() {
            const review = {
                reviewerName: this.reviewerName,
                review: this.currReview,
                rating: this.rating,
                readOn: this.readOn
            };
            bookService.saveBookReview(this.book, review)
                .then(res => {
                    this.reviewerName = '';
                    this.currReview = '';
                    this.rating = 0;
                }).then(res => this.closeReview())
                .then(res => {
                    const msg = {
                        txt: 'You have succesfully reviewed this book!',
                        type: 'success'
                    }
                    eventBus.$emit(EVENT_SHOW_MSG, msg);
                })
        },
        closeReview() {
            this.$emit('submitted');
        },
        rateThis(diff) {
            this.rating = diff;
        }

    },
    mounted() {
        this.$refs.theInput.focus();
    }

}