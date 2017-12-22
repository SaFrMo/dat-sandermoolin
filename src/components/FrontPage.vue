<template>

    <main>

        <section class="gallery">
            <planet-earth/>
        </section>

        <main-menu/>

    </main>

</template>

<style lang="scss">

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

</style>
