input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let index = 0; index < 3; index++) {
        music.playMelody("C5 A C5 A C5 A C5 A ", 120)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColors(0xffff00, 0xffff00, 0xffff00)
    basic.showString("Post vorhanden")
    music.playMelody("G F G A C5 F E D ", 120)
})
