const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//  http://localhost:5500/categories
app.get("/categories", (req, res) => {
  res.json(require("./cats/cat.json"));
});
// http://localhost:5500/cat/101
app.get("/cat/:id", (req, res) => {
  const id = req.params.id;
  try {
    res.json(require(`./cats_products/${id}.json`));
  } catch (error) {
    res.send("esta categoria no es valida");
  }
});
// http://localhost:5500/comentarios/50741
app.get("/comentarios/:idprod", (req, res) => {
  const idprod = req.params.idprod;
  try {
    res.json(require(`./products_comments/${idprod}.json`));
  } catch (error) {
    res.send("este producto no es valida");
  }
});
// http://localhost:5500/productos/40281
app.get("/productos/:idprod", (req, res) => {
  const idprod = req.params.idprod;
  try {
    res.json(require(`./products/${idprod}.json`));
  } catch (error) {
    res.send("este comentario sobre el producto no existe");
  }
});
// http://localhost:5500/sell
app.get("/sell", (req, res) => {
  res.json(require("./sell/publish.json"));
});
// http://localhost:5500/cartuser
app.get("/cartuser", (req, res) => {
  res.json(require("./user_cart/25801.json"));
});
//  http://localhost:5500/cart
app.get("/cart", (req, res) => {
  res.json(require("./cart/buy.json"));
});

app.listen(5500, () => {
  console.log(`Example app listening at http://localhost:5500`);
});
