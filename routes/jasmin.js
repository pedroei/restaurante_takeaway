const { json } = require('express');
const express = require('express');
const router = express.Router();
const request = require('request');
const axios = require('axios');
const controller = require('../controllers/controller');

router.get('/produtos', async (req, res) => {
  try {
    const url =
      'https://my.jasminsoftware.com/api/242895/242895-0001/materialsCore/materialsItems/';

    const urlpreco =
      'https://my.jasminsoftware.com/api/242895/242895-0001/salescore/salesitems';

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
    //console.log(pt);
    res.json(pt);
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/webOrder', async (req, res) => {
  //console.log(req.body);
  try {
    const t = req.body;
    console.log(t);
    let cliente = ';';
    if (req.body.nif == '') {
      cliente = `<comNif>false</comNif>`;
    } else {
      cliente = `<comNif>true</comNif>
      <Cliente>
          <contacto>'${req.body.telefone}'</contacto>
          <email>'${req.body.email}</email>
          <nome>'${req.body.nome}</nome>
          <nif>'${req.body.nif}</nif>
        </Cliente>`;
    }

    let produtos = '';
    req.body.products.forEach((p) => {
      produtos += `<produtosWeb>
      <idProduto>'${p.id}'</idProduto>
      <qtdWeb>'${p.quantity}'</qtdWeb>
    </produtosWeb>`;
    });

    var qs = require('qs');
    var data = qs.stringify({
      casesInfo: `<BizAgiWSParam>        
       <domain>domain</domain>        
       <userName>admon</userName>        
       <Cases>            
       <Case>                
       <Process>TakEatAway</Process>                
       <Entities>                    
       <TakEatAway>
        '${cliente}'
        <entregaEmCasa>'${req.body.entregaEmCasa}'</entregaEmCasa>
        <produtosWeb>
        '${produtos}
        </produtosWeb>
      </TakEatAway>         
       </Entities>            
       </Case>        
       </Cases>    
       </BizAgiWSParam>`,
    });
    var config = {
      method: 'post',
      url:
        'http://localhost:10024/TakEatAway/WebServices/WorkflowEngineSOA.asmx/createCasesAsString',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie:
          'loginOptions=loginOption=alwaysAsk&userName=admon&domain=domain&expires=2/6/2021%203:07:09%20PM',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    //res.json(t);*/
  } catch (error) {
    console.log(error);
  }
});
router.post('/bizagiOrder', async (req, res) => {
  //console.log(req.body);
  try {
    let { products } = req.body.dados;
    let ec = [];
    let nif = null;
    if (!req.body.dados.nif) {
      ec.push({ partyKey: 'INDIF' });
    } else {
      ec = await controller.existsClient(req.body.dados.nif);
      if (ec.length === 0) {
        const crc = await controller.createCient(req.body.dados);
        if (crc !== '') {
          ec = await controller.existsClient(req.body.dados.nif);
        }
      }
    }
    fatura = await controller.createInvoice(ec, products);
    console.log(fatura);
    if (fatura !== '') {
      res.status(200);
      res.send('ok');
    } else {
      res.status(400);
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
