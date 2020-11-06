import { myRouter } from './routes.js';
import userMsg from './apps/cmps/user-msg.cmp.js';
import appHeader from './apps/cmps/app-header.cmp.js';

//Custom directives
Vue.directive('rainbow', {
    bind(el, binding, vnode) {
        //to each el that we bind the rainbow directive his bcg gets a rand color
        el.style.backgroundColor = `#${Math.random().toString().substring(2,8)}`
    }
})

Vue.directive('focus', {
    inserted: function(el, binding, vnode) {
        Vue.nextTick(function() {
            el.focus()
        })
    }
})


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <app-header />
            <router-view class="router-view"/>
            <user-msg />
            <draggable />

        </section>
    `,
    components: {
        // footCmp,
        // headCmp,
        draggable: window['vuedraggable'],
        appHeader,
        userMsg,
    },
}

const app = new Vue(options);