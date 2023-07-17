// import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';
import styles from '../styles/styles.module.css';


const product = products[0];

export const ShoppingPage = () => {

  // const { shoppingCart, onProductCountChange,  } = useShoppingCart();
  
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      {/* //*HOC - Higher order component Compound pattern   */}
        
      <ProductCard 
        key={ product.id }
        product={ product }
        className='bg-dark text-white'
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {
          ({ reset, isMaxCountReached, count, increaseBy }) => (
            <>
              <ProductImage className='custom-image'style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
              <ProductTitle className='text-white' />
              <ProductButtons className='custom-buttons' />
              
              <div className='d-flex w-100'>
                              
                <button 
                  onClick={ () => increaseBy(-2) }
                  className='btn btn-outline-light'>-2 
                </button>

                <span className={ `${styles.countLabel} border border-1 border-light` }>{ count }</span>

                <button 
                  onClick={ () => increaseBy(2) }
                  className={`btn btn-outline-light ${isMaxCountReached && 'd-none'}`}>+2 
                </button>
          
                <div className='d-flex justify-content-end col-6'>

                  <button onClick={ reset } className='btn btn-outline-light'>Reset</button>
                </div>
              </div>
            </>
          )
        }
        
      </ProductCard>
        
    </div>
  );
};
