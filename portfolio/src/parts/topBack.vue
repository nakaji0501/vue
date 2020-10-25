<template>
    <div class="topBack">
        <div class="text">
            <p>TOPへ</p>
        </div>
        <div class="icon">
            <p>
            <font-awesome-icon :icon="['fas', 'arrow-up']" size="2x" />
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'topBack'
}
</script>

<style scoped>
.topBack {
    position: fixed;
    right: 10%;
    bottom: 14%;
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
</style>