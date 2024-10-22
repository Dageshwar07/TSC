var c = [1, 2, 3, 4, 5];
var cCopy = [...c]; 
var d = cCopy.pop();
console.log(c);     
console.log(cCopy);  


let arr:[number,String]=[22,"dageshwar"]

enum UserRoles{
    ADMIN="admin",
    GUEST="guest",
    SUPER_ADMIN="super_user"
}
console.log(UserRoles.ADMIN)

let a:number = 5
console.log(typeof(a))


function abcd ():void{
    console.log(a);
    
}


//interfaces

interface User{
    name:String,
    email:String,
    password:String,
    gender?:String
}
function getData(obj:User){
}
getData({name:"dageshwar",email:"d@gmail.com",password:"hiii"})


//interface extend

interface User{
    name:String,
    email:String,
    password:String
}

interface Admin extends User{
    admin:boolean;
}
function getDataAdmin (obj:Admin){
    obj.admin

}