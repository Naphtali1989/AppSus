export default {
    template: `
            <section class="">
            <div :class="{change:menuOn}" class="show-menu-btn btn" @click="onToggleMenu">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                 </div>
            </section>
            `,
    data() {
        return {
            menuOn: false
        }
    },
    methods: {
        onToggleMenu() {
            console.log('Work in Progress!')
            this.menuOn = !this.menuOn;
            document.body.classList.toggle('show-nav');
        }
    }
}