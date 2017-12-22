<template>

    <section class="planet-earth">

        <div class="planet earth">
            <div class="planet moon">
                <p class="space-station">space station</p>
            </div>
        </div>

    </section>

</template>

<style lang="scss">

@keyframes revolution {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
}

.planet-earth {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .planet {
        background-color: #6666cc;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        animation: revolution 10s infinite linear;
    }
    .moon {
        position: relative;
        top: 350px;
        left: calc(100px - 27px);
        width: 54px;
        height: 54px;
        background-color: #888;

        animation: revolution 5s infinite linear;
    }
    .space-station {
        text-align: center;
        position: relative;
        top: 80px;
    }
}

</style>
