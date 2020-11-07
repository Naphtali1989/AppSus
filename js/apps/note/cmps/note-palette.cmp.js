export default {
    name: 'note-palette',
    template: `
            <section class="palette-container">
                <span v-for="(i,idx) in 12"
                :key="idx"
                 class="color-circle"
                 :style="{backgroundColor: colors[i - 1]}"
                 @click="emitChangeColor(colors[i - 1])"
                 >
                 
                 </span>
            </section>


        `,
    data() {
        return {
            colors: [
                '#e6eff6', '#89b4c4', '#aa6288', '#f0a8ff',
                '#be968a', '#cccccc', '#ffc04c', '#ffffff',
                '#ffb6c1', '#d5f5ee', '#fdfd96', '#d8fca8'
            ],
            clicked: false
        }
    },
    computed: {
        clickedCircle() {
            return { clicked: this.clicked }
        }
    },
    methods: {
        emitChangeColor(color) {
            this.clicked = true;
            console.log('got color:', color)
            this.$emit('changeColor', color)
        }
    }
}