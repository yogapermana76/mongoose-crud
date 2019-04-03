# mongoose-crud

### mongoose-crud built with Express and Mongoose

List of Book routes:
====
**ROUTE** | **HTTP** | **Header(s)**  | **Body** | **Description**
:---: | :---: | :---: | :---: | :---:
`/books/find` | GET | none | none | Get all the books
`/books/find/:id` | GET | none | none | Get a single books
`/books/add` | POST | none | isbn: String, title: String author: String, category: String, stock: Number | Create a book
`/books/update/:id` | PUT | none | isbn: String, title: String, author: String, category: String, stock: Number | Update a book with a new info
`/books/delete/:id` | DELETE | none | none | Delete a book

List of Member routes:
====
**ROUTE** | **HTTP** | **Header(s)**  | **Body** | **Description**
:---: | :---: | :---: | :---: | :---:
`/members/find` | GET | none | none | Get all the member
`/members/find/:id` | GET | none | none | Get a single member
`/members/add` | POST | none | name: String, address: String, zipcode: String, email: String, phone: String | Create a member
`/members/update/:id` | PUT | none | name: String, address: String, zipcode: String, email: String, phone: String | Update a member with a new info
`/members/delete/:id` | DELETE | none | none | Delete a member

List of Transaction routes:
====
**ROUTE** | **HTTP** | **Header(s)**  | **Body** | **Description**
:---: | :---: | :---: | :---: | :---:
`/transaction/find` | GET | none | none | Get all the transaction
`/transaction/find/:id` | GET | none | none | Get a single transaction
`/transaction/add` | POST | none | member: ObjectId, in_date: Date, out_date: Date, due_date: Date, fine: Number, booklist: Array of Book IDs | Create a transaction
`/transaction/update/:id` | PUT | none | member: ObjectId, in_date: Date, out_date: Date, due_date: Date, fine: Number, booklist: Array of Book IDs| Update a transaction with a new info
`/transaction/delete/:id` | DELETE | none | none | Delete a transaction

### **USAGE**
Make sure you have Node.js and npm installed in your computer, and then run this commands in both client and server folders:

```javascript
$npm install
$nodemon app
```
Access via http://localhost:3000/