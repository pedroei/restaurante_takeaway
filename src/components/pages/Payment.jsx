import { useContext } from 'react';

import ProductContext from '../../context/productContext';

const Payment = () => {
  const productContext = useContext(ProductContext);

  const { total } = productContext;

  return (
    <div className="container">
      <h1 className="mt-4 mb-4 centerClass">Pagamento</h1>
      <h3 className="mb-4">
        Total a pagar: <span>{total}€</span>
      </h3>
      <form>
        <div class="form-group row">
          <label for="metodoPagamento" class="col-sm-2 col-form-label">
            Metodo Pagamento
          </label>
          <div class="col-sm-10">
            <select
              class="custom-select mr-sm-2"
              id="metodoPagamento"
              placeholder="Escolha um..."
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="mbway">Mbway</option>
              <option value="visa">Visa</option>
            </select>
          </div>
        </div>

        <div class="form-group row ">
          <div class="col-sm-10 mt-3">
            <button type="submit" class="btn btn-primary">
              Confirmar pagamento
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
