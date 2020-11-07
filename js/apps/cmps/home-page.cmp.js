import appHeader from './app-header.cmp.js'

export default {
    name: 'homePage',
    template: `
               <section class="home-page">
                   <app-header />
                   <main class="main-content">
                       <h1>Welcome to #AppSus</h1>
                    </main>
               </section> 
            `,
    components: {
        appHeader
    }
}