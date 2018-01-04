import randomstring from 'randomstring'

export default class {
    constructor () {
        this.countdown = 5000
        this.name = randomstring.generate({
            length: 3,
            charset: 'ABCDEF012345'
        })

        this.start = { x: 0, y: Math.abs(Math.random() - 0.5) }
        this.end = { x: 1, y: Math.abs(Math.random()) }

        this.speed = Math.ceil(Math.random() * 100)
    }
}
