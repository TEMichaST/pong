input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    led.unplot(x, 4)
    led.unplot(x1, 4)
    x += -1
    x1 += -1
    if (x < 0) {
        x = 0
        x1 = 1
    }
    led.plot(x, 4)
    led.plot(x1, 4)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    led.unplot(x, 4)
    led.unplot(x1, 4)
    x += 1
    x1 += 1
    if (x > 3) {
        x = 3
        x1 = 4
    }
    led.plot(x, 4)
    led.plot(x1, 4)
})
let by = 0
let x1 = 0
let x = 0
let bx1 = 0
let by1 = 0
let sx = 0
x = 0
x1 = 1
let bx = 2
let sy = 1000
let S = sx + sy
loops.everyInterval(S, function () {
    led.plot(bx, by)
    S += -10
    bx += 1
    by += 1
})
