input.onButtonPressed(Button.A, function () {
    basic.showString(" znáš hru shadow tactic blades of the shogun?")
    basic.pause(2000)
    if (input.buttonIsPressed(Button.A)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(2000)
        basic.showString("já jí znám je dobrá")
        basic.showString("je tam Hayato")
        basic.showIcon(IconNames.Happy)
    } else if (input.buttonIsPressed(Button.B)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        basic.showString("fakt?")
        basic.pause(2000)
        basic.showString("i ji neznáš?")
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(2000)
    basic.showString("jsi chytrý?")
    basic.showString("tak si můžeš zahrát creeks")
    basic.pause(2000)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(2000)
    basic.showString("hra ano se odehrává v budoucnosti a ano 1800 v minulosti")
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . . # # .
        . . # . .
        # # # # #
        . # # # .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # . # #
        # # . # #
        `)
    basic.pause(2000)
})
input.onGesture(Gesture.Shake, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    basic.pause(2000)
    basic.showString("wow")
    basic.showIcon(IconNames.Surprised)
    basic.pause(2000)
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.TiltRight, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(2000)
    basic.showString("ahoj!")
    basic.pause(2000)
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.showString("kingdom come je dobrá hra")
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.pause(2000)
    basic.showString("haha")
    basic.pause(2000)
    basic.showString("pojd si hrát")
    basic.showIcon(IconNames.Happy)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setBrightness(100)
strip.showRainbow(1, 360)
for (let index = 0; index < 10; index++) {
    strip.show()
    basic.pause(200)
    strip.rotate(1)
}
strip.clear()
