document.createElement("h1")
const h1 = document.createElement("h1")
h1.innerHTML = " Hello from js "

document.body.appendChild(h1)

import username from './app.js' // is tarika se import krenge toh alg naam rakh (export wala naame se alg) skte hai 
console.log(username)

import {arr} from "./app.js" // name same rhega jo naam export me hai 
console.log(arr)
