<template>

    <section class="planet-earth">

        <!-- <div class="planet earth">
            <div class="planet moon">
                <p class="space-station">space station</p>
            </div>
        </div> -->

        <svg xmlns="http://www.w3.org/2000/svg" class="wrapper" :view-box.camel="viewBox">

            <g class="earth" fill="#66c" stroke="#66c" stroke-width="1" :transform="`translate(${ midX - 100 }, ${ midY - 100 })`">
                <path class="left" d="M99,168l17.5-16L94,137.5l17-19L92,104l16.5-17L87,69.5l21.5-24L83,29,110.94.6A101.4,101.4,0,0,0,100,0a100,100,0,0,0,0,200c3.1,0,6.17-.15,9.2-.43l11.3-16.07Z"/>
                <path class="right" d="M200,100A100,100,0,0,0,110.94.6L83,29l25.5,16.5L87,69.5,108.5,87,92,104l19,14.5-17,19L116.5,152,99,168l21.5,15.5-11.3,16.07A100,100,0,0,0,200,100Z"/>
            </g>


        </svg>

    </section>

</template>

<script>

export default {
    computed: {
        viewBox () {
            return `0 0 ${window.innerWidth} ${window.innerHeight}`
        },
        midX () {
            return window.innerWidth / 2
        },
        midY () {
            return window.innerHeight / 2
        }
    }
}
</script>

<style lang="scss">

@keyframes revolution {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
}

svg.wrapper {
    position: absolute;
    top: 0;
    left: 0;

    .earth path {

    }
}

// .planet-earth {
//     width: 100%;
//     height: 100%;
//
//     display: flex;
//     align-items: center;
//     justify-content: center;
//
//     .planet {
//         background-color: #6666cc;
//         width: 200px;
//         height: 200px;
//         border-radius: 50%;
//         animation: revolution 10s infinite linear;
//     }
//     .moon {
//         position: relative;
//         top: 350px;
//         left: calc(100px - 27px);
//         width: 54px;
//         height: 54px;
//         background-color: #888;
//
//         animation: revolution 5s infinite linear;
//     }
//     .space-station {
//         text-align: center;
//         position: relative;
//         top: 80px;
//     }
// }

</style>
