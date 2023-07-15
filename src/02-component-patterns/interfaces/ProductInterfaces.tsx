import { ReactElement } from 'react';

export interface ProductCardProps { //* in case needs to send more than an object
  children?: ReactElement | ReactElement[];
  product: Product;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps ): JSX.Element,
  Image: ({ img }: { img?: string }) => JSX.Element,
  Title: ({ title }: { title?: string }) => JSX.Element,
  Buttons: () => JSX.Element
}