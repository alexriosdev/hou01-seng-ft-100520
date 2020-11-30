// Rule for arrow functions

// const dog = {
//   name: 'winfield',
//   favSnacks: ['cabbage', 'carrots', 'bones'],
//   eatSnacks: function() {
//     // this => dog
//     this.favSnacks.forEach(function (snack){
//       console.log(`${this.name} is eating ${snack}`)
//     }.bind(this))
//   }
// }
//
// dog.eatSnacks()


// const angryChef = {
//   chefName: 'Chef Gordon Ramsay',
//   cookFood: (foodItem) => {
//     return `${this.chefName} is cooking ${foodItem}`
//   }
// }

// console.log(this) => window
// console.log(angryChef.cookFood('toast'))

// const dog = {
//     name: 'winfield',
//     whatIsThis: {
//       name: 'innerFunc',
//       innerFunc: () => {
//         return this
//       }
//     }
//   }
//
// console.log(this)
// console.log(dog.whatIsThis.innerFunc())





// Rule 4
// function sayHello(){
//   return this
// }
//
// console.log(sayHello())







// Rule 3

// const dog = {
//     name: 'winfield',
//     whatIsThis: function() {
//       return this
//     }
//   }

// console.log(dog.whatIsThis())











// Rule 2

// const personOne = { name: 'andy' }
// const personTwo = { name: 'jon' }
// const personThree = { name: 'garry' }
//
// function sayName(location, time) {
//   return `${this.name} says hello from ${location} at ${time}!`
// }
//
// console.log(sayName.call(personTwo, 'Morocco', '3:00PM'))
// console.log(sayName.apply(personOne, ['Morocco', '3:00PM']))
//
// const functionWithBind = sayName.bind(personThree)
// console.log(functionWithBind('Morocco', '3:00PM'))











// Rule 1

// function Person(name, favColor) {
//   this.name = name
//   this.favColor = favColor
// }

// DO NOT DO THE FOLLOWING
// const Person = (name,favColor) => {
//   this.name = name
//   this.favColor = favColor
// }

// const andy = new Person('andy','blue')
// console.log(andy)
//
// const wintana = new Person('wintana','purple')
// console.log(wintana)
//



















const seal = {
    name: 'sealy',
    kiss: function () {
        console.log(`${this.name} from a rose`)
    }
}

seal.kiss()

var someMethod = seal.kiss
someMethod()
