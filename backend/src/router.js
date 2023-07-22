const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const bookControllers = require("./controllers/bookControllers");

router.get("/books", bookControllers.browse);
router.get("/books/:id", bookControllers.read);
router.put("/books/:id", bookControllers.edit);
router.post("/books", bookControllers.add);
router.delete("/books/:id", bookControllers.destroy);

const CartItemControllers = require("./controllers/CartItemControllers");

router.get("/carts", CartItemControllers.browse);
router.post("/carts", CartItemControllers.add);

module.exports = router;
