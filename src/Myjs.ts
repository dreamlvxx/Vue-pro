function getMess(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    })
}

async function excuxion() {
    let result = await getMess(5);
    console.log(result);

    return "done"
}

console.log("start")
excuxion().then(function (res) {
    console.log("res = " + res)
})
console.log("end")

let sad: number = 123
console.log(sad)


