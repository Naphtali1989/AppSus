export default {
    name: 'appHeader',
    template: `
                <section>
                    <!-- <button class="btn toggle-btn" @click="isShowNav = !isShowNav">
                        <i class="fas fa-bars fa-2x"></i>
                     </button> -->
                    <header class="app-header" v-if="isShowNav">
                        <div class="brand">
                                <img src="./assets/app/img/appsus.png" class="appsus-logo" @click="goHomePage">
                        </div>
                        <nav class="main-nav clean-list" @click="toggleNav">
                                <router-link to="/note" exact>Note App</router-link>
                                <router-link to="/email/board" exact>Email App</router-link>
                                <router-link to="/book/board" exact >Book App</router-link>
                                <router-link to="/about" exact >About us</router-link>
                        </nav>
                    </header>
                </section>
            `,
    data() {
        return {
            isShowNav: true
        }
    },
    methods: {
        toggleNav() {
            document.body.classList.remove('show-nav')
        },
        goHomePage() {
            this.toggleNav()
            this.$router.push('/')
        }
    }
}