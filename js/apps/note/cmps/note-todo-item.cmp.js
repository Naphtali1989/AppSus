export default {
    props: ['todo'],
    name: 'note-todo-item',
    template: `
            <li class="todo-item-container" >
                <span :class="markTodo" @click="emitSaveMark">{{todo.todoTxt}}</span>
                <span @click="emitDeleteTodo" class="delete-todo"><i class="far fa-times-circle"></i></span>
               
            </li>
    
    
    `,
    methods: {
        emitDeleteTodo() {
            this.$emit('deleteTodo', this.todo.id)
        },
        emitSaveMark() {
            this.todo.isDone = !this.todo.isDone
            this.$emit('saveMarkTodo', this.todo.id, this.todo.isDone);
        }
    },
    computed: {
        markTodo() {
            return { marked: this.todo.isDone }
        }
    },
    created() {
        // console.log(this.todo);
    }
}