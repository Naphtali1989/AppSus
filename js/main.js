import { myRouter } from './routes.js';
import userMsg from './apps/main-cmps/user-msg.cmp.js';
import appHeader from './apps/main-cmps/app-header.cmp.js';

const options = {
    el: '#appSus',
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