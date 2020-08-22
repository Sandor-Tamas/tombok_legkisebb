let list: number[] = []
for (let index = 0; index <= 5; index++) {
    list[index] = randint(0, 9)
    basic.showNumber(list[index])
}
let i = 1
let min = list[0]
for (let index = 0; index < 5; index++) {
    if (min > list[i]) {
        min = list[i]
    }
    i = i + 1
}
basic.showString("Legkisebb: ")
basic.showNumber(min)
basic.forever(function () {
	
})
