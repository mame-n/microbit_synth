let haku = 0
let song = 0
let temp = 0
function yasumi() {
    basic.pause(haku * temp)
}
function all_off() {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
input.onButtonPressed(Button.B, function () {

})
input.onButtonPressed(Button.A, function () {
    song += 1
    if (song == 1) {
        song = -1
    }
})
function mi2() {
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(haku * 250)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function song_doreminouta() {
    haku = 1.5; _do(); haku = 0.5; re(); haku = 1.5; mi(); haku = 0.5; _do()
    haku = 1; mi(); _do(); haku = 2; mi()
    haku = 1.5; re(); haku = 0.5; mi(); fa(); fa(); mi(); re()
    haku = 3; fa(); haku = 1; yasumi()
    haku = 1.5; mi(); haku = 0.5; fa(); haku = 1.5; so(); haku = 0.5; mi()
    haku = 1; so(); mi(); haku = 2; so()
    haku = 1.5; fa(); haku = 0.5; so(); ra(); ra(); fa(); so()
    haku = 3; ra(); haku = 1; yasumi()

    haku = 1.5; so(); haku = 0.5; _do(); re(); mi(); fa(); so()
    haku = 3; ra(); haku = 1; yasumi()
    haku = 1.5; ra(); haku = 0.5; re(); mi(); fa(); so(); ra()
    haku = 3; shi(); haku = 1; yasumi()
    haku = 1.5; shi(); haku = 0.5; mi(); fa(); so(); ra(); shi()
    haku = 3; do2(); haku = 0.5; do2(); shi()
    haku = 1; ra(); fa(); shi(); so()
    haku = 3; do2(); haku = 1; yasumi()
}
function song_doreminouta2() {
    haku = 1; _do(); mi(); haku = 2; mi()
    haku = 1; mi(); so(); haku = 2; so()
    haku = 1; re(); fa(); haku = 2; fa()
    haku = 1; ra(); shi(); haku = 2; shi()

    haku = 0.5; _do(); mi(); haku = 1; mi()
    haku = 0.5; mi(); so(); haku = 1; so()
    haku = 0.5; re(); fa(); haku = 1; fa()
    haku = 0.5; ra(); shi(); haku = 1; shi()

    haku = 2; so(); _do()
    ra(); fa()
    mi(); _do()
    haku = 4; re()

    haku = 2; so(); _do()
    ra(); shi()
    do2(); re2();
    haku = 4; do2()

    haku = 0.5; yasumi(); _do(); re(); mi(); fa(); so(); ra(); shi()
    haku = 1; do2(); so(); do2()
}
function _do() {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(haku * temp)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function so() {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(haku * temp)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function re() {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(haku * temp)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function ra() {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(haku * temp)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
function shi() {
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(haku * temp)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
function mi() {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(haku * temp)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function do2() {
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(haku * temp)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
function fa() {
    pins.digitalWritePin(DigitalPin.P4, 1)
    basic.pause(haku * temp)
    pins.digitalWritePin(DigitalPin.P4, 0)
}
function re2() {
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(haku * temp)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
temp = 400
song = -1
led.enable(false)
all_off()
basic.forever(function () {
    if (song == 0) {
        song_doreminouta()
    } else {
        all_off()
    }
})
