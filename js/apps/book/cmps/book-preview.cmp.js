export default {
    props: ['book'],
    template: `
        <section title="Click to see more" class="book-preview flex column" >
            <img class="preview-img" :src="imgUrl" />
            <div class="book-action-btns flex space-between">
                <button class="book-edit-btn btn" @click.stop="enterEditMode(book.id)">Edit</button>
                <button class="book-delete-btn btn" @click.stop="emitDeleteBook()">Delete</button>
            </div>
            <h4 class="book-preview-title">Title: {{book.title}}</h4>
            <h5 class="book-preview-price">Price: {{currency}} </h5>
        </section>
    `,
    computed: {
        imgUrl() {
            return this.book.thumbnail;
        },
        currency() {
            return this.book.listPrice.amount.toLocaleString(this.book.language, {
                style: 'currency',
                currency: this.book.listPrice.currencyCode
            });
        },
    },
    methods: {
        enterEditMode(bookId) {
            this.$router.push('/book/edit/' + bookId);
        },
        emitDeleteBook() {
            this.$emit('deletedBook');
        }
    }
}