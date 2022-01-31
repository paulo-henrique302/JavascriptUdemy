function* geradora1() {
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
}

const g1 = geradora1()

function* geradora2() { // gerador infinito
    let i = 0
    while(true) {
        yield i
        i++
    }
}

const g2 = geradora2()

// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)

function* geradora3() {
    yield 0
    yield 1
    yield 2
}

function* geradora4() {
    yield* geradora3()
    yield 3
    yield 4
    yield 5
}

const g4 = geradora4()

for(let valor of g4) {
    console.log(valor)
}

function* geradora5() {

    yield function() {
        console.log('Vim do yield 1')
    }
    yield function() {
        console.log('Vim do yield 2')
    }
}

const g5 = geradora5()
const f1 = g5.next().value
const f2 = g5.next().value

f1()
f2()
