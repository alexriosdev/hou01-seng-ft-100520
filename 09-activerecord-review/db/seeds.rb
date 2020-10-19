Author.destroy_all
Book.destroy_all

a1 = Author.create(username: 'JK Rowling')
a2 = Author.create(username: 'GRRM')

b1 = Book.create(title: 'Harry Potter', author_id: a1.id)
b2 = Book.create(title: 'Harry Potter the second', author_id: a1.id)
b3 = Book.create(title: 'GOT', author_id: a2.id)
b4 = Book.create(title: 'GOT ❄️ 🔥', author_id: a2.id)
