export default {
    name: 'noteTxt',
    template: `
            <section class="note-txt">
                <p>{{txt}}</p>
            </section>


    `,
    data() {
        return {
            info: {
                txt: ''
            }
        }
    }
}