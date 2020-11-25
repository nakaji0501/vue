<template>
    <div class="footer">
        <div class="footer_bgc"></div>
        <div class="footer_wrapper">
            <div class="footer_sns">
                <a href="https://twitter.com/nakaji_junk">
                    <font-awesome-icon :icon="['fab', 'twitter-square']" size="3x" />
                </a>
                <a href="https://github.com/nakaji0501">
                <font-awesome-icon :icon="['fab', 'github']" size="3x" />
                </a>
            </div>
        </div>
        <div class="copyright">
            <p>© t.n.vuefolio</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vueFooter',
}
</script>

<style scoped>
.footer {
    margin-top: 100px;
    position: relative;
    height: 120px;
    z-index: 80;
}
.footer_bgc {
    position: absolute;
    top: -150px;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -50;
    background-color: lightgray;
    clip-path: polygon(100% 100%, 100% 0%, 0% 30%, 0% 100%);
}
.footer_wrapper {
    position: relative;
    height: 100%;
}
.footer_sns {
    position: absolute;
    top: 0%;
    left: 15%;
}
.footer_sns a {
    color: black;
    margin-right: 24px;
}
.copyright {
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    margin-top: 32px;
    padding-bottom: 8px;
    font-size: 1.5em;
}
</style>