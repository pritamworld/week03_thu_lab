console.log("Git Example")

var str = "Hello World"
var s1 = new String("Hello World")
var s2 = new String("Hello World")
s3 = s1

if(s1 === s3){ //True
    console.log("Equal")
}else{
    console.log("Not Equal")
}

console.log(`Length of s1 is ${s1.length}`) //11
console.log(`Length of s2 is ${s2.length}`) //11
console.log(`Char at 1 is ${s1.charAt(1)}`) //e