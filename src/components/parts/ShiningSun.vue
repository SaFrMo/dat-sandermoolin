<template>

    <section class="shining-sun">

        <svg xmlns="http://www.w3.org/2000/svg" :view-box.camel="`0 0 ${ width } ${ height }`" width="100%" height="100%">

            <circle v-for="circle in circles" :cx="circle.cx" :cy="circle.cy" :r="circle.r"/>

        </svg>

    </section>

</template>

<script>

export default {
    data () {
        return {
            circles: [],
            interval: null,
            currentX: 0,
            currentY: 0
        }
    },
    mounted () {
        this.interval = setInterval(this.generateCircle, 40)
        // window.onResize
    },
    beforeDestroy () {
        clearInterval(this.interval)
    },
    methods: {
        generateCircle () {
            // generate circle size
            const r = this.width / 60
            const cx = this.currentX + r
            const cy = this.currentY + r

            this.currentX += r * 2
            if (this.currentX > this.width) {
                this.currentX = 0
                this.currentY += r * 2
            }

            this.circles.push({
                cx, cy, r
            })

            // if (this.circles.length > 100) {
            //     this.circles.shift()
            // }
        }
    },
    computed: {
        width () {
            return window.innerWidth || 0
        },
        height () {
            return window.innerHeight || 0
        }
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';

.shining-sun {
    circle {
        fill: transparent;
        stroke: #000;
    }
}

</style>
