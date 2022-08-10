async function test() {
    // var list: Array<String> = ["Banana", "Apple", "Orange", "Cherry", "Kiwi"]
    var list: Array<String> = ["a, e, s,,tas ,wq"]
    return list[0].split(",").reverse().join("")
}
console.log(test());