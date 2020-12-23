const selectImage = (productName) => {
  if (productName === 'Vinho branco')
    return 'https://res.cloudinary.com/fonte-online/image/upload/v1/PDO_PROD/4498_2.jpg';
  if (productName === 'Cerveja')
    return window.location.origin + '/images/super_bock.jpg';
  if (productName === 'Coca-Cola')
    return window.location.origin + '/images/coca_cola.jpg';
  if (productName === 'Ice-Tea')
    return window.location.origin + '/images/ice_tea.jpg';
  if (productName === 'Prego no Prato')
    return window.location.origin + '/images/prego.jpg';
  if (productName === 'Francesinha ')
    return window.location.origin + '/images/francesinha.jpg';
  if (productName === 'Hambúrguer tradicional ')
    return window.location.origin + '/images/hamburger.jpg';
  if (productName === 'Moelas à casa')
    return window.location.origin + '/images/moelas.jpg';
  if (productName === 'Bolinhos de bacalhau')
    return window.location.origin + '/images/bolinhos_bacalhau.jpg';
  if (productName === 'Cachorro Quente')
    return window.location.origin + '/images/cachorro.jpg';
  if (productName === 'Filetes de pescada')
    return window.location.origin + '/images/filetes.jpg';
  if (productName === 'Panados no prato')
    return window.location.origin + '/images/panados.jpg';
  if (productName === 'Agua ')
    return window.location.origin + '/images/agua.jpg';
  if (productName === 'Bifanas no pão')
    return window.location.origin + '/images/bifanas.jpg';
  else
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
};

module.exports = { selectImage };
