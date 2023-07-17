import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange,  } = useShoppingCart();
  
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
    
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        
        {/* //*HOC - Higher order component Compound pattern   */}
        {
          products.map( product => (
            <ProductCard 
              key={ product.id }
              product={ product }
              className='bg-dark'
              onChange={ onProductCountChange }
              value={ shoppingCart[ product.id ]?.count || 0 }
            >
              <ProductImage 
                className='custom-image'
                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
              <ProductTitle className='text-white' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }
      </div>

      <div className="shopping-cart">

        {
          Object.entries(shoppingCart).map(([ key, product ]) => (
            <ProductCard 
              key={ product.id } 
              product={ product }
              value= { product.count }
              className='bg-dark'
              style={{ width: '100px' }}
              onChange={ onProductCountChange }
            >
              <ProductImage  className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
              <ProductButtons 
                className='custom-buttons'
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }} />
            </ProductCard>
          ))
        }       

      </div>
    </div>
  );
};
