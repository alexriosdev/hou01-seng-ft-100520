Community.destroy_all
User.destroy_all
CommunityUser.destroy_all
Post.destroy_all

c1 = Community.create(name: "Programming",category: "Tech")
c2 = Community.create(name: "Anime",category: "Entertainment")
c3 = Community.create(name: "BOTW Fan Club",category: "Gaming")
c4 = Community.create(name: "PC Master Race",category: "Tech")
c5 = Community.create(name: "Paintings",category: "Art")


u1 = User.create(username: "atom", location: "H-Town")
u2 = User.create(username: "elijah", location: "H-Town")
u3 = User.create(username: "mickey", location: "Florida")
u4 = User.create(username: "Donald", location: "LA")
u5 = User.create(username: "Harry", location: "Hogwarts")


cu1 = CommunityUser.create(user_id: u1.id, community_id: c1.id)
cu2 = CommunityUser.create(user_id: u2.id, community_id: c1.id)
cu3 = CommunityUser.create(user_id: u3.id, community_id: c1.id)
cu4 = CommunityUser.create(user_id: u3.id, community_id: c3.id)
cu5 = CommunityUser.create(user_id: u4.id, community_id: c5.id)

p1 = Post.create(
  title: "This is really nice ⭐️⭐️⭐️⭐️⭐️",
  content: "I'mma use this for my final project.",
  image_url: "https://designshack.net/wp-content/uploads/placeholder-image.png",
  user_id: u2.id,
  community_id: c5.id
)

p2 = Post.create(
  title: "This is not really nice ⭐️",
  content: "I'm not gonna use this for my final project.",
  image_url: "https://www.webdevelopersnotes.com/wp-content/uploads/create-a-simple-home-page.png",
  user_id: u1.id,
  community_id: c1.id
)

p3 = Post.create(
  title: "⭐️⭐️⭐️⭐️⭐️⭐️⭐️",
  content: "Let's end API here",
  image_url: "https://awlights.com/wp-content/uploads/sites/31/2017/05/placeholder_featured_image.svg",
  user_id: u3.id,
  community_id: c3.id
)
