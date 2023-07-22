const AbstractManager = require("./AbstractManager");

class BookManager extends AbstractManager {
  constructor() {
    super({ table: "book" });
  }

  insert(book) {
    return this.database.query(
      `insert into ${this.table} (title, author, description,picture,price) values (?, ?, ?, ?, ?)`,
      [book.title, book.author, book.description, book.picture, book.price]
    );
  }

  update(book) {
    return this.database.query(
      `update ${this.table} set title = ?, author = ?, description = ?, picture = ?, price = ? where id = ?`,
      [
        book.title,
        book.author,
        book.description,
        book.picture,
        book.price,
        book.id,
      ]
    );
  }

  // delete(book) {
  //   return this.database.query(`delete from ${this.table} where id = ?`, [
  //     book.id,
  //   ]);
  // }
}

module.exports = BookManager;
