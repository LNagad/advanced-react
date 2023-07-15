import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';

export interface Props {
  img?: string;
  className?: string,
  style?: React.CSSProperties
}

export const ProductImage = ({ img, className, style }: Props ) => {

  const { product } = useContext( ProductContext );
  
  return (
    <img 
      className={ `${ styles.productImg } ${ className }` } 
      style={ style }
      src={ ( img ? img : product.img )|| noImage } 
      alt="Product Image" 
    />
  );
};
  