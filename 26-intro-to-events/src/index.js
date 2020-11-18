document.addEventListener('DOMContentLoaded',() => {
  handleButtons()
  handleForm()
})

const renderListItem = (event) => {
    const commentInput = event.target.querySelector('#new-comment')
    // List item
      // create li
      const commentLi = document.createElement('li')
      // set the content for that li
      commentLi.innerText = commentInput.value
      // ✋🏻
      const commentsParent = document.querySelector('#comments-container')
      commentsParent.appendChild(commentLi)
}


const handleForm = () => {
  // Get the form
  const commentForm = document.querySelector('#comment-form')

  // Listen for an event => Submission
  commentForm.addEventListener('submit',(event) => {
    event.preventDefault()
    renderListItem(event)
    event.target.reset()
  })

}


const handleButtons = () => {
  // Get the parent
  const buttonParent = document.querySelector('#button-parent')

  // Listen for the click on the parent
  buttonParent.addEventListener('click',(e) => {
    // Perform callback based on the target
    if(e.target.id === 'alert'){
      alert('Alert button was clicked.')
    }else if(e.target.id === 'log'){
      console.log('Log button was clicked.')
    }else if(e.target.id === 'errr'){
      console.error('err button was clicked...')
    }
  })

}



// const handleErrBtn = () => {
//   // find the right element
//   const errBtn = document.querySelector('#errr')
//   // listen for the event
//   errBtn.addEventListener('click',() => {
//     // show a console.log
//     console.error('err button was clicked...')
//   })
// }
//
// const handleLogBtn = () => {
//   // find the right element
//   const logBtn = document.querySelector('#log')
//   // listen for the event
//   logBtn.addEventListener('click',() => {
//     // show a console.log
//     console.log('log button was clicked...')
//   })
// }
//
//
// const handleAlertBtn = () => {
//   // find the right element
//   const alertBtn = document.querySelector('#alert')
//   // listen for the event
//   alertBtn.addEventListener('click',(event) => {
//     // show an alert
//     alert('alert button was clicked...')
//   })
// }
