import { ErrorMessage, useField  } from 'formik';

interface Props {
    name: string;
    id?: string;
    label?: string;
    type?: React.HTMLInputTypeAttribute;
    className?: string;
    [x: string]: any
}

export const RegisterFormikInput = ({ type = 'text', className='form-control', ...props }: Props) => {
   
   const [ field ] = useField( props );
   
   return (
      <div className='mb-2'>
         { props.label && <label className='form-label p-0' htmlFor={ props?.id || props.name }>{ props.label }</label> }
         <input className={ className } type={ type } { ...field } { ...props } />
         <ErrorMessage name={ props.name } component='span' />
      </div>
   );
};
