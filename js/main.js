import { myRouter } from './routes.js';
import userMsg from './apps/main-cmps/user-msg.cmp.js';

const options = {
    el: '#appSus',
    router: myRouter,
    template: `
        <section >

            <!-- <head-cmp /> -->

            <router-view class="router-view"/>

            <user-msg />

            <!-- <foot-cmp /> -->

        </section>
    `,
    components: {
        // footCmp,
        // headCmp,
        userMsg
    },
}

const app = new Vue(options);