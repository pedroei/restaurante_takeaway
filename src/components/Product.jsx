import { useEffect, useState } from 'react';
//import imagem from './imagem.jfif';

const Product = ({ product, addToCart, removeProduct, getImage }) => {
  const [data, setData] = useState(
    'https://gourmetjr.com.br/wp-content/uploads/2018/03/JPEG-image-B6230B799E47-1_1170x600_acf_cropped_490x292_acf_cropped.jpeg'
  );
  /*
  useEffect(() => {
    const getTheImageData = async () => {
      const res = await getImage(product.image);

      let imageData =
        'data:image/*;base64,' + new Buffer.from(res).toString('base64');
      //console.log(imageData);
      setData(imageData);
    };

    getTheImageData();
  }, []);
*/
  //console.log(data);
  return (
    <div className="col-md-4">
      <div className="card h-100">
        {data && (
          <img
            className="card-img-top img-fluid img-thumbnail"
            src={data}
            alt={product.name}
          />
        )}
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <h4 className="card-text">{product.price}€</h4>
        </div>
        <div className="card-footer bg-white">
          {addToCart && (
            <button
              className="btn btn-success"
              onClick={() => addToCart(product)}
            >
              Adicionar ao carrinho
            </button>
          )}
          {removeProduct && (
            <button
              className="btn btn-danger"
              onClick={() => removeProduct(product)}
            >
              Remover
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
