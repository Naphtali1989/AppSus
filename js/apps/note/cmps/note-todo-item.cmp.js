export default {
    props: ['todo'],
    name: 'note-todo-item',
    template: `
            <li class="todo-item-container" >
                <span :class="markTodo" @click="todo.isDone = !todo.isDone">{{todo.todoTxt}}</span>
                <span @click="emitDeleteTodo" ><i class="far fa-times-circle"></i></span>
               
            </li>
    
    
    `,
    methods: {
        emitDeleteTodo() {
            this.$emit('deleteTodo', this.todo.id)
        },
        emitMarkTodo() {
            this.$emit('save-mark', this.todo.id, this.todo.isDone);
        }
    },
    computed: {
        markTodo() {
            return { marked: this.todo.isDone }
        }
    },
    created() {
        console.log(this.todo);
    }
}