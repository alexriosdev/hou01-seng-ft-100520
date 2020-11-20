document.addEventListener('DOMContentLoaded',() => {
  handleCommunitiesList()
  handlePosts()
})

const handlePosts = () => {
  fetch('http://localhost:3000/posts')
  .then(res => res.json())
  .then(posts => {
    posts.forEach(post => renderPost(post))
  })
}

const renderPost = (post) => {

  const postCard = document.createElement('div')
  postCard.className = "post-card"

  const likesBar = document.createElement('div')
  likesBar.className = "likes-bar"

  const likeBtn = document.createElement('button')
  likeBtn.innerText = '👍🏻'

  const likesCounter = document.createElement('span')
  likesCounter.innerText = "420k"

  const unlikeBtn = document.createElement('button')
  unlikeBtn.innerText = '👎🏻'

  likesBar.appendChild(likeBtn)
  likesBar.appendChild(likesCounter)
  likesBar.appendChild(unlikeBtn)

  // Post card title parent

  const postCardTitleParent = document.createElement('div')
  postCardTitleParent.className = "post-card-title-parent"

  const postCardInfo = document.createElement('div')
  postCardInfo.className = "post-card-info"

  const forumTitle = document.createElement("span")
  forumTitle.id = "forum-title"
  forumTitle.innerText = `r/${post.community_id}`

  const userInfo = document.createElement("span")
  userInfo.id = "userinfo"
  userInfo.innerText = `Posted by r/${post.user_id} 2 hours ago`

  postCardInfo.appendChild(forumTitle)
  postCardInfo.append('•')
  postCardInfo.appendChild(userInfo)

  // Post card title

  const postCardTitle = document.createElement('div')
  postCardTitle.className = "post-card-title"
  postCardTitle.innerText = post.title

  const postImage = document.createElement('img')
  postImage.src = post.image_url

  const postContent = document.createElement('a')
  postContent.href = "https://google.com"
  postContent.innerText = post.content

  postCardTitleParent.appendChild(postCardInfo)
  postCardTitleParent.appendChild(postCardTitle)
  postCardTitleParent.appendChild(postImage)
  postCardTitleParent.appendChild(postContent)

  // Find the parent
  const postFeed = document.querySelector(".post-feed")
  // ✋🏻
  postCard.appendChild(likesBar)
  postCard.appendChild(postCardTitleParent)
  postFeed.appendChild(postCard)



}








// This is for the communities on main page

const handleCommunitiesList = () => {
  fetch('http://localhost:3000/communities')
  .then(res => res.json())
  .then(communities => {
    communities.forEach((community,index) => renderCommunityList(community,index))
  })
}

const renderCommunityList = (community,index) => {
  const name = community.name
  const itemNumber = index + 1

  // create a list item
  const communityLi = document.createElement('li')

  // Change the content
  communityLi.innerText = `${itemNumber} 🔸 r/${name}`
  // console.log(communityLi)

  // Find the parent
  const communityParentDiv = document.querySelector(".communities-list")

  // ✋🏻
  communityParentDiv.appendChild(communityLi)
}
