import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <h1 style={{ marginBottom: '50px' }}>Informação para entrega</h1>
      <form className="container">
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="form-control"
            placeholder="O seu nome..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="number"
            id="telefone"
            name="telefone"
            className="form-control"
            placeholder="O seu numero..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nomeRua">Nome da rua</label>
          <input
            type="text"
            id="nomeRua"
            name="nomeRua"
            className="form-control"
            placeholder="Nome da rua..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numPorta">Numero da porta</label>
          <input
            type="number"
            id="numPorta"
            name="numPorta"
            className="form-control"
            placeholder="Numero da porta..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="codPostal">Codigo postal</label>
          <input
            type="text"
            id="codPostal"
            name="codPostal"
            className="form-control"
            placeholder="Codigo postal..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            className="form-control"
            placeholder="Cidade"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nif">Nif</label>
          <input
            type="number"
            id="nif"
            name="nif"
            className="form-control"
            placeholder="Se quiser com numero de contribuinte..."
          />
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="entregaEmCasa"
            value="entregaEmCasa"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="entregaEmCasa">
            Entrega em Casa
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="entregaNoRestaurante"
            value="entregaNoRestaurante"
          />
          <label className="form-check-label" htmlFor="entregaNoRestaurante">
            Ir buscar ao restaurante
          </label>
        </div>
        <div className="form-group">
          <Link to="/payment">
            <input
              type="submit"
              value="Continuar para o pagamento"
              className="btn btn-primary mt-3"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
