<template>

    <header class="main-menu">

        <nav>
            <router-link to="/"><h1>Sander Moolin</h1></router-link>
            <ul>
                <!-- <li><router-link to="about">About</router-link></li> -->
                <li><a href="/ld40/">Games</a></li>
            </ul>
        </nav>

    </header>

</template>

<style lang="scss">
@import 'src/styles/vars';

.main-menu {
    font-size: 21px;
    text-align: left;
    display: inline-block;
    width: 350px;
    margin-left: 0;
    border: 4px solid #000;
    padding: 0 30px;
    background-color: #fff;

    position: absolute;
    right: $body-padding;
    bottom: $body-padding;

    h1 {
        border-bottom: 2px solid $color2;
    }
    ul {
        padding: 0;
        list-style-type: none;
    }
}

</style>
