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
