export default {
    name: 'noteAdd',
    template: `
            <section class="note-add-container">
                <div class="input-container">
                    <input type="text" :placeholder="placeholder"/>
                    <div class="btns-container">
                        <button class="btn" @click.stop="noteType = 'noteTxt'"><i class="fas fa-font fa-2x"></i></button>
                        <button class="btn" @click.stop="noteType= 'noteImg'"><i class="far fa-image fa-2x"></i></button>
                    </div>
                </div>
            </section>
    
    
    `,
    data() {
        return {
            placeholders: {
                noteTxt: 'Please enter text...',
                noteImg: 'Please enter a img url...'
            },
            noteType: '',

        }
    },
    computed: {
        placeholder() {
            if (this.noteType === 'noteTxt') return this.placeholders.noteTxt
            else if (this.noteType === 'noteImg') return this.placeholders.noteImg
        }
    }
}