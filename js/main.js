import { myRouter } from './routes.js';
import userMsg from './apps/cmps/user-msg.cmp.js';
import appHeader from './apps/cmps/app-header.cmp.js';

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <app-header />
            <router-view class="router-view"/>
            <user-msg />

        </section>
    `,
    components: {
        // footCmp,
        // headCmp,
        appHeader,
        userMsg
    },
}

const app = new Vue(options);