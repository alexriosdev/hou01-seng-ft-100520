const URL = 'https://dog.ceo/api/breeds/image/random'

document.addEventListener('DOMContentLoaded',() => {
  handleDogBtn()
})

const handleDogBtn = () => {
  // Get the button
  const fetchDogBtn = document.querySelector('button')
  // Listen for a click
  fetchDogBtn.addEventListener('click',() => {
    // Make a request
    fetch(URL,{
      method: 'GET'
    })
    .then((response) => response.json())
    .then((dogObj) => {
      let dogUrl = dogObj.message
      addImageToPage(dogUrl)
    })
  })
}


const addImageToPage = (dogUrl) => {
  // create image
  const dogImg = document.createElement('img')

  // change the src
  dogImg.src = dogUrl

  // find the parent
  const dogImgParent = document.querySelector('#addnewstuff')
  dogImgParent.innerHTML = ''

  // ✋🏻
  dogImgParent.appendChild(dogImg)
}



















// function fun1(){
//   fun2()
//   console.log('fun1 ended')
// }
//
// //fn 2 is async
// function fun2(){
//   fun3()
//   console.log('fun2 ended')
// }
//
//
// //fn 3 is async
// function fun3(){
//   fun4()
//   console.log('fun3 ended')
// }
//
// function fun4(){
//   console.log('fun4 ended')
//   return "this is yeet.."
// }
//
// fun1()


/*************************************************************************************************************************/
/* DIY Sleep Function */
/*************************************************************************************************************************/

  // function sleep(n) {
  //   let i = 0
  //   while(i < (12 ** 8) * n) {
  //     i++
  //   }
  // }
  //
  // console.log('Starting the sleep function')
  // sleep(100)
  // console.log('Wow that sleep function took forever to run. 1 Star 🌟')

/*************************************************************************************************************************/



// console.log('First Line')
// console.log('Second Line')
//
// setTimeout(()=>{
//   console.log('Third Line')
// },1000)
//
// console.log('Seventh Line')
//
// setTimeout(() => {
//     console.log('Sixth Line')
// }, 5)
//
// setTimeout(() => {
//     console.log('Fifth Line')
// }, 5)
