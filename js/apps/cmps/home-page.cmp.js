import appHeader from './app-header.cmp.js'

export default {
    name: 'homePage',
    template: `
               <section class="home-page">
                   <div class="fork-me">
                     <!-- <span><i class="fab fa-github"></i> Fork me on Github</span> -->
                   </div>
                   <main class="main-content">
                       <img src="../../../assets/app/img/appsus.png" class="app-logo"/>
                       <h1 class="app-title">Welcome to AppSus</h1>
                       <p class="app-desc">AppSus is a simple app for managing emails,notes and books</p>
                       <nav class="app-btns clean-list">
                           <li>
                               <router-link to="/note" exact>Note App</router-link>
                           </li>
                            <li>
                               <router-link to="/email/board" exact>Email App</router-link>
                           </li>
                           <li>
                               <router-link to="/book" exact>Book App</router-link>
                           </li>
                       </div>
                    </main>
                    <footer class="app-footer">
                        <h1 class="footer-title">#AppSus</h1>
                        <small>Made with <i class="fab fa-vuejs fa-2x"></i> By Idan Atiya and Naphtali Rubin</small>
                    </footer>
               </section> 
            `,
    components: {
        appHeader
    }
}