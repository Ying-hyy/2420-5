input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 32) {
        basic.showString("Hot")
    } else if (input.temperature() > 21) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showString("cold")
    }
})
