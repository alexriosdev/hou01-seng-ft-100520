function cheeseFunc() {
  let cheese = 'cheddar'

  return function() {
    return `I like to eat ${cheese}`
  }
}

let result = cheeseFunc()()
console.log(result)

// function innerFunc(){
//   console.log("I'm innerFunc")
// }
//
// function outerFunc(callback){
//   console.log("I'm outerFunc")
//   return callback
// }
//
// [1,2,3,4,5].forEach(outputElements)
//
// outerFunc(innerFunc)()


// const helloWorldConst = (name) => {
//   console.log(`Hello, ${name} via const`)
//   return `Howdy There, ${name}`
// }
//
// const helloWorldArrow = (name) => `Hey, ${name}!`
