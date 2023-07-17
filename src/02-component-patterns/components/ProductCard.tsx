import { createContext } from 'react';
import { useProduct } from '../hooks';
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/ProductInterfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props { 
  children?: React.ReactElement | React.ReactElement[];
  style?: React.CSSProperties,
  product: Product;
  className?: string;
  value?: number;
  onChange?: ( args: onChangeArgs ) => void;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
  
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ 
      counter, 
      increaseBy, 
      product 
    }}>
      <div
        className={ `${styles.productCard} ${ className }` }
        style={ style }>
        { children }
      </div>
    </Provider>
  );
};
