//Array


// const myArray = new Array(0,1,2,3,4,5,6)

// myArray.push(6)
// console.log(myArray)
// myArray.pop()
// console.log(myArray)


// myArray.unshift(9)
// console.log(myArray)
// myArray.shift()
// console.log(myArray)

// const newArray = myArray.join()
// console.log(newArray)


// const mna1 = myArray.slice(1,4)
// console.log('A',myArray)
// console.log(mna1)

// const mna2 = myArray.splice(1,4)
// console.log('B',myArray)
// console.log(mna2)




// ________________________________________________________________


const arr1 = [1,2,3]
const arr2 = [4,5,6]

// arr1.push(arr2)
// console.log(arr1)

const arr = arr1.concat(arr2)
// console.log(arr)


const newarr = [...arr1,...arr2]
// console.log(newarr)



const v = [1,2,[3,4],[5,6],7,[8,9]]
const v1 = v.flat(Infinity)

// console.log(v,v1)

// console.log(Array.isArray("uppu"))
// console.log(Array.from("uppu"))


let s1 = 1
let s2 = 2
let s3 = 3

// console.log(Array.of(s1,s2,s3))







// objects ______________________________________


const user = {
    name : "uppu",
    age : 20,
    location : "Delhi"
}

// console.log(user.name)
// console.log(user["name"])


// using a symbol
const mysym = Symbol("key")
const js = {
    name : "poornima",
    [mysym] : "key"
}

// console.log(js[mysym])


js.name = "aaranya" // to change values

// console.log(js.name)



// Object.freeze(js) // ab koi js ki values change ni krskta

// console.log(js),


// js.greeting = Function() 
// {
//     console.log("Pandey");
// }

// console.log(js.greeting)
// console.log(js.greeting())



const reg = {
    name:"Riya",
    fullname :{
        us :{
            fname: "riya",
            lname : "pandey"
        }

    }
}

// console.log(reg.fullname.us.fname,reg.fullname.us.lname) nested objects



const obj1 = {
    1:'a'
}
const obj2 = {
    2:'b'
}

const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)


// console.log(Object.keys(user))
// console.log(Object.values(user))






