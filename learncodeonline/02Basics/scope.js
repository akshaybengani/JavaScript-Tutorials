let iAmGlobal = "someValue"

if(false){
    let iamLocal = 'someMoreValue'
    console.log(iAmGlobal)
    console.log(iamLocal);
}
//  console.log(iamLocal);
// console.log(iAmGlobal)

// Kings problem

let king = "Akshay"
if(true){
    //let king = "Shivank" 
    if(true){
        king = "Naman"
        console.log(king);
    }
}
if(true){
    console.log("I am in second part = " + king)
}



