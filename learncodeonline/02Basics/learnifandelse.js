
if(false){
    console.log("I am inside the if block");
    console.log("I am still in the if block")
}else if(false){
    console.log("I am inside the else if  block")
    console.log("I am still inside the else if block")
}else{
//    console.log("I am inside the else block")
//    console.log("I am still inside the else block")
}

var whoIsHere = 'user'
if(whoIsHere === 'user'){
    console.log("Greeting message for the user")
    console.log("Allow access to view all courses")
}else if(whoIsHere === 'teacher'){
    console.log("Greeting message for the Teacher")
    console.log("Allow access to his courses")
}else{
    console.log('Message: Please verify your email')
    console.log('Send user an email for verification')
}



