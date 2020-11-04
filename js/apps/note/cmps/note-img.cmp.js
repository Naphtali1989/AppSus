export default {
    name: 'noteImg',
    template: `
            <section class="note-img">
                <img :src="imgUrl" alt=""/>
                <p>{{txt}}</p>
            </section>


    `,
    data() {
        return {
            info: {
                imgUrl: '',
                txt: ''
            }
        }
    }
}