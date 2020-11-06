import noteTodo from './note-todo.cmp.js'

export default {
    name: 'note-todos',
    template: `
            <section class="note-todos-container">
                <note-todo />
                <!-- Will render a todo -->
            </section>
    
    
    
        `
    components: {
        noteTodo
    }
}