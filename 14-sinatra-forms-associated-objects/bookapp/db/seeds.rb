Book.destroy_all
Author.destroy_all

a1 = Author.create(name: 'John Doe', bio: 'Im just a placeholder')
a2 = Author.create(name: 'Jane Doe', bio: 'Im with John')

b1 = Book.create(title: 'GOT 1', author_id: a1.id)
b2 = Book.create(title: 'It', author_id: a2.id)
b3 = Book.create(title: 'HP', author_id: a2.id)
