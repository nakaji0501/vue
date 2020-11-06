<template>
    <transition name="btn">
    <div class="topBack"
    v-show="buttonHide"
    @click="topBack"
    >
        <div class="text"
        >
            <p>TOPへ</p>
        </div>
        <div class="icon">
            <p>
            <font-awesome-icon :icon="['fas', 'arrow-up']" size="2x" />
            </p>
        </div>
    </div>
    </transition>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'topBack',
    data() {
        return {
            buttonHide: false,
            scroll: 0
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollWindow)
    },
    methods: {
        topBack() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        scrollWindow() {
            const top = 300
            this.scroll = window.scrollY
            if(top <= this.scroll) {
                this.buttonHide = true
            } else {
                this.buttonHide = false
            }
        }
    }
}
</script>

<style scoped>
.topBack {
    position: fixed;
    right: 10%;
    bottom: 14%;
    z-index: 200;
    cursor: pointer;
}
.text {
    transform: rotate(90deg);
    margin-bottom: 24px;
}
.icon {
    height: 64px;
    background-color: rgb(11, 71, 139);
    clip-path: polygon(0% 30%, 100% 0%, 100% 70%, 0% 100%);
    position: relative;
}
.icon p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}
.btn-enter-active,
.btn-leave-active {
    transition: opacity 1s;
}
.btn-enter,
.btn-leave-to {
    opacity: 0;
}
</style>