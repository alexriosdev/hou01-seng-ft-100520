User.destroy_all
Post.destroy_all

tom = User.create(username: 'tom', password: '123')
harry = User.create(username: 'harry', password: '123')

p1 = Post.create(
  title: '1st',
  img: 'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-care/new-pet-parent/images/golden-retriever-puppy-running-outside.jpg',
  likes: 110,
  user_id: tom.id
)

p2 = Post.create(
  title: '2nd',
  img: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg',
  likes: 39,
  user_id: tom.id
)

p3 = Post.create(
  title: '3rd',
  img: 'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-care/new-pet-parent/images/golden-retriever-puppy-running-outside.jpg',
  likes: 0,
  user_id: harry.id
)
