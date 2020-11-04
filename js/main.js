import { myRouter } from './routes.js';

const options = {
    el: '#appSus',
    router: myRouter,
    template: `
        <section >

            <head-cmp />

            <router-view class="router-view"/>

            <user-msg />

            <foot-cmp />

        </section>
    `,
    components: {
        footCmp,
        headCmp,
        userMsg
    },
}

const app = new Vue(options);