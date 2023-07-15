import { createContext } from 'react';
import { useProduct } from '../hooks';
import { ProductCardProps, ProductContextProps } from '../interfaces/ProductInterfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        { children }
      </div>
    </Provider>
  );
};
