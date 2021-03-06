import { useState, useContext } from 'react';

import ProductContext from '../../context/productContext';

const Checkout = (props) => {
  const productContext = useContext(ProductContext);
  const { buildFatura } = productContext;

  const [fatura, setFatura] = useState({
    nome: '',
    email: '',
    telefone: '',
    nomeRua: '',
    numPorta: '',
    codPostal: '',
    cidade: '',
    nif: '',
    entregaEmCasa: 'true',
  });

  const {
    nome,
    email,
    telefone,
    nomeRua,
    numPorta,
    codPostal,
    cidade,
    nif,
    entregaEmCasa,
  } = fatura;

  const onChange = (e) => {
    setFatura({ ...fatura, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    buildFatura(fatura);
    props.history.push('/payment');
  };

  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <h1 style={{ marginBottom: '50px' }}>Informação para entrega</h1>
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={onChange}
            className="form-control"
            placeholder="O seu nome..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nome">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            className="form-control"
            placeholder="O seu email..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="number"
            id="telefone"
            name="telefone"
            value={telefone}
            onChange={onChange}
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
            value={nomeRua}
            onChange={onChange}
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
            value={numPorta}
            onChange={onChange}
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
            value={codPostal}
            onChange={onChange}
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
            value={cidade}
            onChange={onChange}
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
            value={nif}
            onChange={onChange}
            className="form-control"
            placeholder="Se quiser com numero de contribuinte..."
          />
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="entregaEmCasa"
            id="entregaEmCasa"
            value="true"
            checked={entregaEmCasa === 'true'}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="entregaEmCasa">
            Entrega em Casa
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="entregaEmCasa"
            id="entregaNoRestaurante"
            value="false"
            checked={entregaEmCasa === 'false'}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="entregaNoRestaurante">
            Ir buscar ao restaurante
          </label>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Continuar para o pagamento"
            className="btn btn-primary mt-3"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
