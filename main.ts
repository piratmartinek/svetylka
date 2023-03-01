input.onButtonPressed(Button.A, function () {
    basic.showString(" znáš hru shadow tactic blades of the shogun?")
    basic.showString("já jí znám je dobrá")
    basic.showString("je tam Hayato")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
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
    basic.showString("wow")
    basic.showIcon(IconNames.Surprised)
    basic.pause(2000)
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
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
