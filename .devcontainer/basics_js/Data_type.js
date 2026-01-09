// Primitive datatype
// String
// Number, boolean, null, undefined, symbol, BigInt
// Reference type-> (Non primitie)
// Array, objects, functions,
// ->
const score = 100;
const numval = 100.3;
const isloggedIn = false;
const outsidetemp = null;
let userEmail;/*value if we print will be undefined*/
const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id === anotherid);


const heroes = ["ironman", "nagraj", "doga"];
let myobj = {
    name:"Abhijit",
    age: 23
}

const myfun = function(){
    console.log("Hello world");
}
// let store = null; -> object (imp)
// console.log(typeof store)
console.log(typeof heroes)

// *******************************Memories***********************************************************************************

// stack(primitive),Heap(non_primitive)
let myname = "Abhijit"
let anotherName = myname;
console.log(anotherName);

