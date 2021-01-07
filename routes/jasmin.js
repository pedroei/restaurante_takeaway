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
    const token = await controller.getToken();
    //console.log(token);
    let produtos = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });

    const pt = produtos.data.map((p) => {
      return {
        name: p.description,
        id: p.itemKey,
        description: p.complementaryDescription,
        image: p.image,
        imageThumbnail: p.imageThumbnail,
        price: p.materialsItemWarehouses[0].calculatedUnitCost.amount,
        stock: p.materialsItemWarehouses[0].stockBalance,
      };
    });
    //console.log(pt);
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
        documentLines: [
          {
            salesItem: "0001",
            unitPrice: {
              amount: 0.4187,
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
  console.log(req.body);
  res.send("ok");
});

module.exports = router;
/* buyerCustomerParty: "0011",
        documentLines: [
          {
            salesItem: "0015",
            quantity: 2,
            unitPrice: {
              amount: 20,
            },
          },
        ],*/
