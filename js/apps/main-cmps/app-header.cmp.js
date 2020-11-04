export default {
    name: 'appHeader',
    template: `
                <header class="app-header">
                    <div class="brand">
                        AppSus
                    </div>
                    <nav class="clean-list">
                        <li>
                            <router-link to="/" exact>Home</router-link>
                        </li>
                        <li>
                            <router-link to="/keep" exact>Keep App</router-link>
                        </li>
                        <li>
                            <router-link to="/mail" exact>Mail App</router-link>
                        </li> 
                    </nav>
                
                </header>
            `
}