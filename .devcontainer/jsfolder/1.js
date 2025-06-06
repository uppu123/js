// console.log(typeof null);
// console.log(typeof undefined);

// ---------------------------------------------

// let str1 = "Hello"
// let str2 = " World"
// let str3 = str1 + str2
// console.log(str3)

// ------------------------------------------------

// console.log("2" + 1)
// console.log(2 + "1")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")


// ---------------------------------------

// console.log(true)
// console.log(+true)

// -----------------------------------------------------

// console.log("1" > 2)
// console.log("2" == 2)

// ______________________________________________________________

// const id = Symbol("123")
// const aid = Symbol("123")
// console.log(id === aid)

// ______________________________________________________________

// const name = "Uppu";
// let age = 20
// console.log(`Hello my name is ${name} and my age is ${age}`)


// _______________________________________________________________________________



// const GameName = new String("Uppu-Aar")

// console.log(GameName.__proto__)
// console.log(GameName.toUpperCase())
// console.log(GameName.charAt(4))
// console.log(GameName.indexOf('A'))

// const news = GameName.substring(0,4);
// console.log(news)

// const anews = GameName.slice(-8,4)
// console.log(anews)

// const man = "   Upender   "
// console.log(man.trim());
// console.log(man.replace('er','ra'))

// console.log(man.includes("Upen"))

// console.log(GameName.split('-'))


// ________________________________________________________________


// const balance = new Number(200)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toFixed(2))

// const num = 123.87654
// console.log(num.toPrecision(3))
// console.log(num.toPrecision(4))

// const hun = 10000000
// console.log(hun.toLocaleString('en-IN'))


// ______________________________________________________


// console.log(Math)
// console.log(Math.abs(-3))

// console.log(Math.round(4.6))

// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.1))

// console.log(Math.min(2,3,4,5,32))

// console.log(Math.floor(Math.random()*10)+1)



// _____________________________________________________

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myDate.getTime())

console.log(Math.floor(Date.now()/1000)) //timestamp in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
