//TASK 1

//Create a function that will ALERT if browser is online or not.
function alertBrowser(){
    if (window.navigator.onLine === true) {
        alert ("The browser is online")
    }
    console.log("hello")
}
alertBrowser(); 

//TASK 2

//Create a function that should, when run, reload the page.

/* function refresh(){
    setTimeout(function(){
        location.reload()
    } , 300);
   
}
refresh();  */

//
//TASK 3

/* Create a function that should, 3 seconds after page is loaded, redirect you to google.com, ad then, 3 seconds after that take you back to your page. 
(Comment out your code once you're done so you can continue with the other tasks, as this will cause infinite loop).
 */
/* function goToGoogle(){
    setTimeout(function(){
        history.forward(location.href = "http://www.google.com")
    } , 300);
   
}
goToGoogle() */;

//TASK 4

//Crete a function that should every second console log a number incremented by one. 
//When number reach 15 it should stop running.
var i = 0;

function printName() {
     
    console.log(i);
	i === 15 ? clearInterval(repeatPrint) : i++;
}

var repeatPrint = setInterval(printName, 1000);


//TASK 5

//Create a function that should return a random number (round number) between 0 and 10, every time you run it.

console.log(Math.round(Math.random() * 10))
//TASK 6
	/* STEP 1
	    Create an array of objects, containing at least 5 users. Each of them should have name, age and status. Status should be "inactive" for each of them.
	STEP 2
	    Once page is loaded it should display a popup where user can enter his name. Once it's done name user entered should be compared against existing users.
        If it doesn't match any user you should console log message: 

	        "User with name " + name + " doesn't exist."
        If it match some of users, object with that user's data should be copied from array. It's status should be changed to "active", and it should be saved in local storage using "loggedInUser" as a key.
    STEP 3
	    After one minute user's data should be removed from local storage.
        You should console log a message that user is logged out.
 */

var users = [
     {
        name:"Petar",
        age:32,
        status:"inactive"
         
     },
     {
         name:"Nikola",
         age:35,
         status:"inactive"

     },
     {
         name:"Lily",
         age:36,
         status:"inactive"

     },
     {
         name:"Jasy",
         age:23,
         status:"inactive"

     },
     {
         name:"Marco",
         age:26,
         status:"inactive"

     }
    ] 

/*     var users = {
        name:"Nikola",
        age:26,
        status:"inactiv"
    }

    var answer = prompt("and what is your name?");
    if (answer !== users.name) {
       console.log( "User with name " + answer + " doesn't exist.")
    } if (answer === users["name"]) {
        users = Object.create(users);
            users["status"] = "active"
    }
    console.log(users) */

var answer = prompt("and what is your name?");

var arr= users.filter(function(item) {
    return item.name==answer;
}); 
if (arr.length == 0) {
    console.log("User "+answer+" doesn't exist");
} else {
    users.forEach(function(item){
        if (item.name == name) { 
            users.status='active'};
    })
localStorage.setItem("loggedIn", answer)
console.log(localStorage.getItem("loggedIn"));
setTimeout(function(){
    users.forEach(function(item){
        if (item.name == name) {
             users.status='active'};}); 
             localStorage.removeItem("loggedIn");
             console.log(answer + " is logged out")}, 60000)
}