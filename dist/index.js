"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = __importStar(require("mysql"));
function greeting(person) {
    // using template strings
    return `Hello, ${person.firstName} ${person.lastName} you are ${person.age} years old!`;
}
let person = {
    firstName: "Joe",
    lastName: "Vermeulen",
    age: 24
};
let scholar = {
    school: "Parow High",
    firstName: "Peter",
    lastName: "Parker",
    age: 23
};
let result1 = greeting(person);
let result2 = greeting(scholar);
console.log(result1);
console.log(result2);
var testFunc = (name) => {
    return "Hi, " + name;
};
let mySQLURL = "mysql://root:@localhost/ts-test";
let conn = mysql.createConnection(mySQLURL);
conn.connect();
conn.query("insert into coders (firstName, email) values ('Andre', 'andre@projectcodex.co')");
//console.log(conn);
// conn.connect()
setTimeout(() => {
    conn.query("select * from coders;", function (err, results) {
        console.log(results);
    });
    conn.end();
}, 2000);
//testFunc("Annelize");
