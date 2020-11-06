export default {
    name: 'appHeader',
    template: `
                <section>
                    <!-- <button class="btn toggle-btn" @click="isShowNav = !isShowNav">
                        <i class="fas fa-bars fa-2x"></i>
                     </button> -->
                    <header class="app-header" v-if="isShowNav">
                        <div class="brand">
                            <img src="../../../assets/app/img/logo.png"> AppSus
                        </div>
                        <nav class="main-nav clean-list" @click="toggleNav">
                            <li>
                                <router-link to="/" exact >Home</router-link>
                            </li>
                            <li>
                                <router-link to="/note" exact >Note App</router-link>
                            </li>
                            <li>
                                <router-link to="/email" exact >Email App</router-link>
                            </li> 
                        </nav>
                    </header>
                </section>
            `,
    data() {
        return {
            isShowNav: true
        }
    },
    methods:{
        toggleNav(){
            document.body.classList.remove('show-nav')
        }
    }
}