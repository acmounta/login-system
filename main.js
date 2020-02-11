var peopleObj = [
    //first object
    {
        username:"samir",
        password:"sammir123"
    },
    //second object 
    {
        username:"omar",
        password:"omar123"
    },
    //third object 
    {
        username:"rami",
        password:"rami123"
    }
]
function getInfo(){
    var username =document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(var i=0;i<peopleObj.length;i++){
       	// check is user input matches username and password of a current index of the objPeople array
        if(username == peopleObj[i].username && password == peopleObj[i].password){
       console.log(username + ' login successfully');
        //stop function if pass is correct
        return
    }
}
    console.log('incorrect password or username');
}