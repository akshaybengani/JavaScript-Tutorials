/*
if the marks are 10 then amazing
5 good
3 poor
0 fail
*/
let marks = 10

if(marks==10){
    console.log("Amazing")
}else if(marks<10 && marks>=5){
    console.log("Good")
}else if(marks<5 && marks>=3){
    console.log("Poor")
}else if(marks<3 && marks>=0){
    console.log("Fail")
}