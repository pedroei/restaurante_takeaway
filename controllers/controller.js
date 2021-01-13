const { json } = require("express");
const request = require("request");
const axios = require("axios");

//Pede Token e devolve para outras funções
function getToken() {
  let token;
  request(
    {
      url: "https://identity.primaverabss.com/core/connect/token",
      method: "POST",
      auth: {
        user: "IEOP-FASTFOOD", // TODO : put your application client id here
        pass: "ea8b71dc-0cae-459a-a18a-c361b972a915", // TODO : put your application client secret here
      },
      form: {
        grant_type: "client_credentials",
        scope: "application",
      },
    },
    function (err, res) {
      if (res) {
        console.log("Access Token:", res.body);
        token = JSON.parse(res.body);
      } else {
        console.log("Could not obtain acess token.");
      }
    }
  );
  return new Promise(function (resolve, reject) {
    // Only `delay` is able to resolve or reject the promise
    setTimeout(function () {
      resolve(token); // After 3 seconds, resolve the promise with value 42
    }, 1000);
  });
}

//Criar Cliente
async function createCient(client) {
  try {
    const url =
      "https://my.jasminsoftware.com/api/242895/242895-0001/salesCore/customerParties";
    const token = await getToken();
    // console.log(client);
    const t = {
      name: client.nome,
      isExternalManaged: false,
      currency: "EUR",
      isPerson: true,
      country: "PT",
      companyTaxId: parseInt(client.nif),
      mobile: parseInt(client.telefone),
      electronicMail: client.email,
      paymentMethod: "NUM",
      paymentTerm: "00",
      paymentTermDescription: "Pronto Pagamento",
      deliveryTerm: "NA",

      /*streetName: client.nomeRua,
      buildingNumber: client.numPorta,
      postalZone: client.codPostal,
      cityName: client.cidade,*/
    };
    console.log(t);
    let cl = await axios.post(url, t, {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        "Content-Type": "application/json",
      },
      json: true,
    });
    //  console.log(cl);
    return cl.data;
  } catch (error) {
    console.log(error.message);
  }
}

//Verifica se aquele nif já existe nos clientes
async function existsClient(nif) {
  try {
    const url = `https://my.jasminsoftware.com/api/242895/242895-0001/salesCore/customerParties`;
    const token = await getToken();

    let client = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });

    let cl = client.data.map((c) => {
      return {
        partyKey: c.partyKey,
        name: c.name,
        companyTaxId: c.companyTaxID,
        mobile: c.mobile,
        email: c.electronicMail,
      };
    });

    let ct = cl.filter((ci) => ci.companyTaxId === nif);
    return ct;
  } catch (error) {
    console.log(error.message);
  }
}
async function createInvoice(client, produtos) {
  try {
    let pt = produtos.map((p) => {
      return {
        salesItem: p.id,
        quantity: parseInt(p.quantity),
        unitPrice: {
          amount: parseFloat(p.unitPrice),
        },
      };
    });
    console.log(client);
    const url =
      "https://my.jasminsoftware.com/api/242895/242895-0001/billing/invoices";
    const token = await getToken();

    let invoice = await axios.post(
      url,
      {
        buyerCustomerParty: client[0].partyKey,
        emailTo: client[0].email,

        documentLines: pt,
        documentType: "FR",
        financialAccount: "01",
        isWsCommunicable: true,
      },
      {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      }
    );
    console.log(invoice.data);
    return invoice.data;
  } catch (error) {
    console.log(error);
  }
}
module.exports = { getToken, existsClient, createCient, createInvoice };
