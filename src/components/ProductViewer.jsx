import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct, nextProduct, prevProduct } from '../product/productSlice';

const ProductViewer = () => {
  const dispatch = useDispatch();
  const { product, status, error, currentProductId } = useSelector((state) => state.product);
  const theme = useSelector((state) => state.theme.theme);

  React.useEffect(() => {
    dispatch(fetchProduct(currentProductId));
  }, [dispatch, currentProductId]);

  return (
    <div className={`product-viewer ${theme}`}>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {product && (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img src={product.thumbnail} alt={product.title} />
          <p className="price">Price: ${product.price}</p>
        </div>
      )}
      <button onClick={() => dispatch(prevProduct())} disabled={currentProductId <= 1}>
        Назад
      </button>
      <button onClick={() => dispatch(nextProduct())}>
        Вперед
      </button>
    </div>
  );
};

export default ProductViewer;
