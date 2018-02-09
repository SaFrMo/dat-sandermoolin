<template>

    <main :class="['front-page', { broken: broken }]">

        <section class="gallery">
            <planet-earth/>
        </section>

        <transition name="jump-out">
            <main-menu @break="broken = true" v-if="!broken"/>
        </transition>

    </main>

</template>

<script>

export default {
    data () {
        return {
            broken: false
        }
    }
}
</script>

<style lang="scss">

    .front-page {
        overflow-y: hidden;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .gallery {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .gallery > * {
        width: 100%;
        height: 100%;
    }

    .jump-out-leave-active {
        transition: transform 1s;
    }
    .jump-out-leave-to {
        transform: translateY(200%);
    }
</style>
