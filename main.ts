radio.setGroup(1)
let angle = 0
let speed = 0
basic.forever(function () {
    speed = input.rotation(Rotation.Pitch)
    angle = input.rotation(Rotation.Roll)
    led.plot(Math.map(angle, -90, 90, 0, 5), Math.map(speed, -90, 90, 0, 5))
    radio.sendNumber(angle)
    radio.sendNumber(speed)
    basic.pause(10)
    basic.clearScreen()
})
