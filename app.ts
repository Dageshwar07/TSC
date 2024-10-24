// var c = [1, 2, 3, 4, 5];
// var cCopy = [...c]; 
// var d = cCopy.pop();
// console.log(c);     
// console.log(cCopy);  


// let arr:[number,String]=[22,"dageshwar"]

// enum UserRoles{
//     ADMIN="admin",
//     GUEST="guest",
//     SUPER_ADMIN="super_user"
// }
// console.log(UserRoles.ADMIN)

// let a:number = 5
// console.log(typeof(a))


// function abcd ():void{
//     console.log(a);
    
// }


// //interfaces

// interface User{
//     name:String,
//     email:String,
//     password:String,
//     gender?:String
// }
// function getData(obj:User){
// }
// getData({name:"dageshwar",email:"d@gmail.com",password:"hiii"})


// //interface extend

// interface User{
//     name:String,
//     email:String,
//     password:String
// }

// interface Admin extends User{
//     admin:boolean;
// }
// function getDataAdmin (obj:Admin){
//     obj.admin

// }

// ///type aliases
// type sankhya = number;

// var e:sankhya;

// type value = String|null
// function efg(obj:value){

// }
// efg("hii")
// // efg(6)
// //intersection types

// type Users={
// name:String,
// email:String

// }
// type Admins = Users & {
//     getDetails(User:String):void
// }

// function hij (a:Admins){
//     a.getDetails
// }
// class and object

class BottleMaker{
constructor(public name:String,public price:number,public color:String,public material:String){

}
}
const b1 =new BottleMaker("Milton",1200,"yellow","metal")
const b2 =new BottleMaker("Cello",100,"transparent","plastic")

// default constructor


class HumanMaker{
    constructor(a:String,age:number=0){

    }
}
new HumanMaker("dageshwar")

class Music {
    constructor(public name:string,public artist:string,public thumbnail:string="something.jgp",public length:number,public free:boolean
    ){
        this.name=name
        this.artist=artist
        this.free=free
        this.thumbnail=thumbnail
        this.length=length

    }
   
}
let m1 = new Music("chal chhaiya chhaiya","dageshwar","",1200,false)
let m2 = new Music("gadi wala aaya ghar se kachra nikal","nagar palika","kachara.png",2000, true)