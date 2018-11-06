<template>
    <div class="popup-boss">
        <!-- mask -->
        <div v-if="value" :class="[ mask ? 'popup-mask' : '']" @click.stop="onclickMaskToClosepopup"></div>
        <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:enter-cancelled="enterCancelled"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
            v-on:after-leave="afterLeave"
            v-on:leave-cancelled="leaveCancelled">
            <!-- v-if 时渲染 -->
            <div
                v-if="type === 'if' && value"
                :position='position'
                class="popup-container"
                :class="[ position + '-class', ]"
                :style="styles">
                <slot></slot>
            </div>
            <!-- v-show 时渲染 -->
            <div
                v-show="type === 'show' && value"
                :position='position'
                class="popup-container"
                :class="[ position + '-class', ]"
                :style="styles">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Popup',
    props: {
        mask: {
            type: Boolean,
            default: true,
        },
        value: {
            required: true,
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'show',
        },
        position: {
            type: String,
            default: 'center', // center top left right, bottom
        },
        styles: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    mounted() {
        const arr = [ 'center', 'top', 'left', 'right', 'bottom', ];
        if (!arr.find(i => this.position === i)) throw new Error('[ popup ] popup的 position 必须是 center top left right bottom之一'); 
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
            if (this.position !== 'center') {
                el.style.transition = `${this.position} 1s linear`;
            } else {
                el.style.transition = null;
            }
        },
        enter(el, done) {
            switch(this.position) {
                case 'left': el.style.left = - 5 *  el.offsetWidth + 'px'; break;
                case 'right': el.style.right = - 5 * el.offsetWidth + 'px'; break;
                case 'bottom': el.style.bottom = - 5 * el.offsetHeight + 'px'; break;
                case 'top': el.style.top = - 5 * el.offsetHeight + 'px'; break;
            };
            if (this.position !== 'center') {
                setTimeout(() => {
                    el.style.opacity = 1;
                    switch(this.position) {
                        case 'left': el.style.left = 0; break;
                        case 'right': el.style.right = 0; break;
                        case 'bottom': el.style.bottom = 0; break;
                        case 'top': el.style.top = 0; break;
                    };
                    done();
                }, 100);
            } else {
                el.style.opacity = 1;
            }
        },
        afterEnter(el) {},
        enterCancelled(el) {},
        beforeLeave(el) {
            el.style.opacity = 0;
        },
        leave(el, done) {
            done();
        },
        afterLeave(el) {},
        leaveCancelled(el) {},
        /*
        * 点击 mask 关闭 popup
        */
        onclickMaskToClosepopup(e) {
            if (this.mask && e.target.className.indexOf('popup-mask') !== -1) {
                this.$emit('input', false);
            }
        },
    },
};
</script>

<style lang="less">
    .popup-boss {
        .popup-container {
            position: relative;
            background-color: #fff;
            transition: all 1s ease;
        }
        .center-class {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        .bottom-class {
            position: absolute;
            width: 100%;
            bottom: 0;
        }
        .top-class {
            position: absolute;
            width: 100%;
            top: 0;
        }
        .left-class {
            position: absolute;
            height: 100%;
            left: 0;
            top: 0;
        }
        .right-class {
            position: absolute;
            height: 100%;
            right: 0;
            top: 0;
        }
    };
    .popup-mask {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
    }
</style>


