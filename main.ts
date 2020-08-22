let list: number[] = []
for (let index = 0; index <= 5; index++) {
    list[index] = randint(0, 9)
}
for (let index = 0; index <= 5; index++) {
    basic.showNumber(list[index])
}
let i = 0
let min = list[i]
for (let index = 0; index < 4; index++) {
    if (min > list[i]) {
        min = list[i]
    }
    i = i + 1
}
basic.showString("Legkisebb: ")
basic.showNumber(min)
basic.forever(function () {
	
})
