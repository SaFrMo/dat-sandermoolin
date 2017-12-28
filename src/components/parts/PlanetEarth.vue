<template>

    <section class="planet-earth">

        <div class="planet earth">
            <div class="planet moon">
                <p class="space-station">space station</p>
            </div>
        </div>

        <div class="control-panel">
            <!-- Instructions -->
            <transition name="fade" mode="out-in">
                <button key="button" v-if="instructionsIndex == 0" @click="instructionsIndex++">play game!</button>
                <p
                    :key="i"
                    v-for="(entry, i) in instructionsIndex"
                    v-if="instructionsIndex == i + 1">
                    {{ instructions[instructionsIndex] }}
                </p>
            </transition>
            <div class="nav-buttons" v-if="instructionsIndex > 0 && instructionsIndex < instructions.length">
                <button @click="instructionsIndex = Math.max(0, instructionsIndex - 1)">Back</button>
                <button @click="instructionsIndex++">Next</button>
            </div>

            <!-- Game meta -->
            <div class="game-meta" v-if="instructionsIndex >= instructions.length">
                <div class="incoming">
                    <strong>Incoming!</strong>
                    <ul>
                        <li v-for="(incoming, i) in incomingQueue">{{ incoming }}</li>
                    </ul>
                </div>
            </div>
        </div>

    </section>

</template>

<script>
import Asteroid from '@/games/PlanetEarth/Asteroid'

export default {
    data () {
        return {
            playing: false,
            instructions: [
                'initial',
                'You and your browser window are all that stand between Earth and total destruction!',
                'Resize your window so that the incoming meteors miss Earth, the Moon, and the Space Station.',
                'The longer you hold out, the more points you get. Good luck!'
            ],
            instructionsIndex: 3,
            incomingQueue: []
        }
    },
    methods: {
        generateQueue (count) {
            this.incomingQueue = []
            for (let i = 0; i < count; i++) {
                this.incomingQueue.push(new Asteroid())
            }
        }
    },
    watch: {
        instructionsIndex (newVal) {
            if (newVal >= this.incomingQueue.length) {
                this.generateQueue(1)
            }
        }
    }
}
</script>

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
    flex-direction: column;

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
.control-panel {
    position: fixed;
    top: 0;
    right: 10vw;
    left: 10vw;
    width: 80vw;
    background-color: #f9f9f9;
    padding: 40px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

</style>
