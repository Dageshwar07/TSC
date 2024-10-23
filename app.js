"use strict";
var c = [1, 2, 3, 4, 5];
var cCopy = [...c];
var d = cCopy.pop();
console.log(c);
console.log(cCopy);
let arr = [22, "dageshwar"];
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_user";
})(UserRoles || (UserRoles = {}));
console.log(UserRoles.ADMIN);
let a = 5;
console.log(typeof (a));
function abcd() {
    console.log(a);
}
function getData(obj) {
}
getData({ name: "dageshwar", email: "d@gmail.com", password: "hiii" });
function getDataAdmin(obj) {
    obj.admin;
}
var e;
function efg(obj) {
}
efg("hii");
function hij(a) {
    a.getDetails;
}
// class and object
