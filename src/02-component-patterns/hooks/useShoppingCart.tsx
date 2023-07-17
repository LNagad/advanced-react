import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/ProductInterfaces';

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
  
    setShoppingCart( (prevShoopingCart) => {
      
      if ( count === 0) {
        const { [ product.id ]: toDelete, ...rest } = prevShoopingCart;
        return rest;
      }
        
      return {
        ...prevShoopingCart,
        [ product.id ]: { ...product, count }
      };
        
    });
  };


  return {
    // * properties
    shoppingCart,

    //* methods
    onProductCountChange
  };
};
