import { bookService } from '../book-service.js';
import longText from '../cmps/long-text.cmp.js';
import reviewAdd from '../cmps/review-add.cmp.js';
import bookReviews from '../cmps/book-reviews.cmp.js';


export default {
    template: `
        <section v-if="book" class="book-details flex align-center column" >
            <div class="book-details-navigation-btns space-around flex">
                <button class="prev-book-btn btn" @click="loadBook(-1)"><i class="fas fa-angle-double-left"></i></i></button>
                <button class="go-back-btn  btn" @click="openBooks"><i class="fas fa-backspace"></i></button>
                <button class="next-book-btn btn" @click="loadBook(1)"><i class="fas fa-angle-double-right"></i></button>
            </div>

            <h4>Title: {{book.title}}, {{book.subtitle}}</h4>
                <ul class="authors-list clean-list" ><p> Author/s:</p>
                    <li v-for="author in book.authors"><h4>{{author}}</h4></li>
                </ul>
            <h5>Price: <span :class="priceTag">{{currency}}</span> </h5>
            <div class="img-container">
                <img :src="imgUrl" />
                <img class="sale-img" v-if="isSale" src="./assets/book/img/sale-tag-removebg.png"/>
            </div>
            <p v-if="showRating">*Rating: {{ratingCalc}}*</p>
            <p class="book-pages">**{{pageCount}}**</p>
            <p class="book-date">***{{publishedDate}}***</p>
            <long-text :txt="book.description"/>
            <button v-if="!isReviewing" class="review-open-btn btn" @click="toggleReview">Review this book!</button>
            <review-add v-if="book && isReviewing" :book="book" @submitted="toggleReview"/>
            
            <book-reviews v-if="book && !isReviewing" :reviews="book.reviews" :bookId="book.id" @outOfReviews="showNoReviews"/>

        </section>
    `,
    data() {
        return {
            book: null,
            isSale: null,
            isDescFull: false,
            isReviewing: false,
            currBookId: null
        }
    },
    computed: {
        pageCount() {
            if (this.book.pageCount > 500) return `Long Reading`;
            else if (this.book.pageCount > 200) return `Decent Reading`;
            else if (this.book.pageCount < 100) return `Light Reading`;
            else return `Moderate Reading`;
        },
        publishedDate() {
            const currYear = new Date().getFullYear();
            if (currYear - this.book.publishedDate > 10) return `Veteran Book`;
            else if (currYear - this.book.publishedDate > 1) return `Had some time on the shelf`;
            else return `New book!`;
        },
        priceTag() {
            return { 'red-price': this.book.listPrice.amount > 150, 'green-price': this.book.listPrice.amount < 20 }
        },
        imgUrl() {
            return this.book.thumbnail;
        },
        currency() {
            return this.book.listPrice.amount.toLocaleString(this.book.language, { style: 'currency', currency: this.book.listPrice.currencyCode })
        },
        showRating() {
            return this.book.reviews && this.book.reviews.length > 0;
        },
        ratingCalc() {
            var rating = 0;
            for (let i = 0; i < this.book.reviews.length; i++) {
                rating += this.book.reviews[i].rating
            }
            return (rating / this.book.reviews.length).toFixed(2);
        }
    },
    methods: {
        toggleReview() {
            this.isReviewing = !this.isReviewing;
        },
        openBooks() {
            this.$router.push('/book/board');
        },
        showNoReviews() {
            console.log('no more reviews')
        },
        loadBook(diff) {
            const currId = this.book.id;
            bookService.getNextBookId(currId, diff)
                .then(newId =>
                    this.$router.push('/book/' + newId)
                )
        }
    },
    components: {
        longText,
        reviewAdd,
        bookReviews,
    },
    created() {
        const id = this.$route.params.bookId;
        bookService.getBookById(id)
            .then(book => {
                this.book = book;
                this.isSale = this.book.listPrice.isOnSale;
                this.currBookId = book.id
            })
    },
    watch: {
        '$route.params.bookId' (to, from) {
            bookService.getBookById(to)
                .then(book => {
                    this.book = book;
                    this.isSale = this.book.listPrice.isOnSale;
                    this.currBookId = book.id
                })
        }
    }
}