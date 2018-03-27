<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
@import 'src/styles/vars';

body {
    margin: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

a {
    text-decoration: none;
    color: $color1;
    transition: color 0.4s;

    &:hover,
    &:focus {
        color: $color2;
    }
}

// transitions
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s;
}
</style>
