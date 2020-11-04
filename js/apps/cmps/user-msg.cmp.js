import { eventBus } from '../../services/event-bus-service.js';

export default {
    template: `
            <section v-if="msg" class="user-msg" :class="msgType">
                <i class="icon" :class="msgIcon"></i>
                <div class="msg-info">
                    <p>{{msg.type}}</p>
                    <p class="msg-txt">{{msg.txt}}</p>
                </div>
                <button @click="closeMsg" class="close-btn">x</button>
            </section>
            `,
    data() {
        return {
            msg: null,
            timer: null
        }
    },
    methods: {
        closeMsg() {
            this.msg = null;
            clearTimeout(this.timer);
        }
    },
    computed: {
        msgType() {
            const { type } = this.msg
            return { success: type === 'success', error: type === 'error' }
        },
        msgIcon() {
            const { type } = this.msg;
            if (type === 'success') return 'fas fa-check-circle fa-2x'
            else return 'fas fa-exclamation-triangle fa-2x';
        }
    },
    created() {
        eventBus.$on('show-msg', msg => {
            if (this.timer) this.closeMsg()
            this.msg = msg;
            this.timer = setTimeout(() => {
                this.closeMsg();
            }, 3000)
            console.log(this.msg)
        })

    }
}