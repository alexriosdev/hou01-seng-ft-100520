// const imgUrl = 'https://i.imgur.com/dzbQCj4.png'

const removeThisDiv = document.querySelector('#removethis')
removeThisDiv.remove()

// Identify the node
const imageContainer = document.querySelector('#container').querySelector('p')

dankMemes.forEach(function(imgUrl){
  // Create the node
  const image = document.createElement('img')
  image.src = imgUrl

  // ✋🏻 to DOM
  imageContainer.appendChild(image)
})
