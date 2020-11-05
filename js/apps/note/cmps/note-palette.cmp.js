export default {
    name: 'note-palette',
    template: `
            <section class="palette-container">
                <div v-for="(i,idx) in 12"
                :key="idx"
                 class="color-circle"
                 :style="{backgroundColor:  colors[i - 1]}"
                 @click="emitChangeColor(colors[i - 1])"
                 >
                 
                 </div>
            </section>


        `,
    data() {
        return {
            colors: [
                '#e6eff6', '#89b4c4', '#aa6288', '#f0a8ff',
                '#be968a', '#cccccc', '#ffc04c', '#ffffff',
                '#ffb6c1', '#d5f5ee', '#fdfd96', '#d8fca8'
            ]
        }
    },
    methods: {
        emitChangeColor(color) {
            console.log('got color:', color)
            this.$emit('changeColor', color)
        }
    }
}