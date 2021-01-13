const { json } = require("express");
const express = require("express");
const router = express.Router();
const request = require("request");
const axios = require("axios");
const controller = require("../controllers/controller");

router.get("/produtos", async (req, res) => {
  try {
    const url =
      "https://my.jasminsoftware.com/api/242895/242895-0001/materialsCore/materialsItems/";

    const urlpreco =
      "https://my.jasminsoftware.com/api/242895/242895-0001/salescore/salesitems";

    const token = await controller.getToken();
    //console.log(token);
    let produtos = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });
    let produtospreco = await axios.get(urlpreco, {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });

    let pt = [];

    produtospreco.data.forEach((prod) => {
      produtos.data.forEach((p) => {
        if (prod.itemKey === p.itemKey) {
          pt.push({
            name: p.description,
            id: p.itemKey,
            description: p.complementaryDescription,
            image: p.image,
            imageThumbnail: p.imageThumbnail,
            price: prod.priceListLines[0].priceAmount.amount,
            stock: p.materialsItemWarehouses[0].stockBalance,
          });
        }
      });
    });
    console.log(pt);
    res.json(pt);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/createClient", async (req, res) => {
  const c = await controller.existsClient();
  //const c = await controller.createCient();
  console.log(c);
  res.json(c);
});

router.post("/createInvoice", async (req, res) => {
  try {
    const url =
      "https://my.jasminsoftware.com/api/242895/242895-0001/billing/invoices";
    const token = await controller.getToken();

    let invoice = await axios.post(
      url,
      {
        buyerCustomerParty: "0001",
        emailTo: "clr@ipvc.pt",
        documentLines: [
          {
            salesItem: "0001",
            quantity: 2,
            unitPrice: {
              amount: 10,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      }
    );
    console.log(invoice.data);
    res.json(invoice.data);
  } catch (error) {
    console.log(error);
  }
});

router.post("/webOrder", async (req, res) => {
  //console.log(req.body);
  try {
    const t = await controller.existsClient(req.body);
    console.log(t);
    res.json(t);
  } catch (error) {
    console.log(error);
  }
});
router.post("/bizagiOrder", async (req, res) => {
  //console.log(req.body);
  try {
    let { products } = req.body.dados;
    let ec = [];
    let nif = null;
    if (!req.body.dados.nif) {
      ec.push({ partyKey: "INDIF" });
    } else {
      ec = await controller.existsClient(req.body.dados.nif);
      if (ec.length === 0) {
        const crc = await controller.createCient(req.body.dados);
        if (crc !== "") {
          ec = await controller.existsClient(req.body.dados.nif);
        }
      }
    }
    fatura = await controller.createInvoice(ec, products);
    console.log(fatura);
    if (fatura !== "") {
      res.status(200);
      res.send("ok");
    } else {
      res.status(400);
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
