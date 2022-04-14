
// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username", "password" & "status". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".



//3. Accept username, password & status from the prompt and add it to the database array 

//4. Create a function called SignIn that accept two parameter - username, password. This function would check the database array to check for any matching entry. If username & password matches return 
// Both the username and status, if not return "Sorry, wrong username and password" 


//5. Initialise your database array with five object of username, password and status. 

//6. Update your signIn function to use loop; running through the item in the database and return matching username and password.


let database = [{
   username: "Mikel",
   password: "password1",
   status: "married"
}, 
{
    username: "Miguel",
    password: "password2",
    status: "single"
}, 
{
   username: "Melina",
   password: "password3",
   status: "married"
}, 
{
    username: "Messa",
    password: "password4",
    status: "single"
}, 
{
    username: "Mikkey",
    password: "password5",
    status: "married"
}]

function signin (username, password){
  for (let i = 0; i < database.length; i++){
    if(database[i].username.toLowerCase() === username.toLowerCase() && database[i].password.toLowerCase() === password.toLowerCase()) {
      console.log("Your username is " + database[i].username + " and status is " + database[i].status)
      return
    }
  }

  console.log("Sorry, wrong username and password")
}

let username = prompt("enter username");
let password = prompt("enter password");
let userStatus = prompt("enter status");

signin(username, password)
