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
        <div className="form-group row">
          <label htmlFor="metodoPagamento" className="col-sm-2 col-form-label">
            Metodo Pagamento
          </label>
          <div className="col-sm-10">
            <select
              className="custom-select mr-sm-2"
              id="metodoPagamento"
              placeholder="Escolha um..."
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="mbway">Mbway</option>
              <option value="visa">Visa</option>
            </select>
          </div>
        </div>

        <div className="form-group row ">
          <div className="col-sm-10 mt-3">
            <button type="button" className="btn btn-primary">
              Confirmar pagamento
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
