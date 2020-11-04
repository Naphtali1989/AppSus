export default {
    props: ['note'],
    name: 'noteTxt',
    template: `
            <section class="note-txt">
                <p>{{note.info.txt}}</p>
            </section>


    `,
}