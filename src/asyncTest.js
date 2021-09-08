function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    console.log('start')
    console.log(`start1`)
    const res = await timeout(ms);
    console.log(`timeout = ${res}`)
    console.log(value);
    return 'asyncprint end'
}
 function noss(){
    const res = asyncPrint('value',2000)
    console.log(`noss res = ${res}`)
     res.then(function (ttt) {
         console.log(ttt)
     })
}
noss()

class ParentCLa {
    getmess(){
        console.log(`parent`)
    }
}

class CHildren extends ParentCLa{
    getmess() {
        console.log(`children`)
    }
}

new ParentCLa().getmess()

new CHildren().getmess()

// async function sss(){
//     const rr = await asyncPrint('hello world', 5000);
//     console.log(`rr = ${rr}`)
// }
//
// sss()
