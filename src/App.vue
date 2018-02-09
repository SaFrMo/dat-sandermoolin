<template>
    <div id="app">
        <router-view/>
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

a,
button {
    text-decoration: none;
    color: $color1;
    transition: color 0.4s;
    appearance: none;
    outline: none;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 21px;
    border: none;
    padding: 0;
    cursor: pointer;

    &:hover,
    &:focus {
        color: $color2;
    }
}
</style>
