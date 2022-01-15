function recurs(max) {
    if (max >= 10) return
    max++
    console.log(max)
    recurs(max)
}
recurs(0)