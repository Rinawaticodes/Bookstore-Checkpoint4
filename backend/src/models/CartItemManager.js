const AbstractManager = require("./AbstractManager");

class CartItemManager extends AbstractManager {
  constructor() {
    super({ table: "cart" });
  }

  findAll() {
    return this.database.query(
      `select
      cart_book.*,
        SUM(cart_book.quantity * book.price) as total_price
        from  cart_book
        join book on cart_book.book_id = book.id
        group by cart_book.id`
    );
  }

  async save(cart) {
    const [result] = await this.database.query(
      `insert into ${this.table} () values ()`
    );
    return this.database.query(
      `insert into cart_book (cart_id, book_id, quantity) values ${cart
        .map(() => "(?, ?, ?)")
        .join(",")}`,
      cart.map((book) => [result.insertId, book.id, book.count]).flat()
    );
  }
}
module.exports = CartItemManager;
