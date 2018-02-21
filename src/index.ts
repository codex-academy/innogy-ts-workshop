import Person from "./interfaces/person";
import Scholar from "./interfaces/scholar";
import * as mysql from "mysql";

function greeting(person : Person){
    // using template strings
    return `Hello, ${person.firstName} ${person.lastName} you are ${person.age} years old!`;
}

let person : Person = {
    firstName : "Joe",
    lastName : "Vermeulen",
    age : 24
};

let scholar : Scholar = {
    school : "Parow High",
    firstName : "Peter",
    lastName  : "Parker",
    age : 23
};

let result1 = greeting(person);
let result2 = greeting(scholar);

console.log(result1);
console.log(result2);

var testFunc = (name : string) => {
    return "Hi, " + name
}

let mySQLURL = "mysql://root:@localhost/ts-test";
let conn = mysql.createConnection(mySQLURL);

conn.connect();

conn.query("insert into coders (firstName, email) values ('Andre', 'andre@projectcodex.co')");

//console.log(conn);
// conn.connect()

setTimeout(() => {
    conn.query("select * from coders;", function(err, results){
        console.log(results);
    });    
    conn.end();
}, 2000);

//testFunc("Annelize");
