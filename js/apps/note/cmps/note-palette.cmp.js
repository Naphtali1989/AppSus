export default {
    name: 'note-palette',
    template: `
            <section class="palette-container">
                <div v-for="(i,idx) in 8"
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
            colors: ['blue', 'red', 'yellow', 'green', 'purple', 'pink', 'orange', 'brown']
        }
    },
    methods: {
        emitChangeColor(color) {
            console.log('got color:', color)
            this.$emit('changeColor', color)
        }
    }
}