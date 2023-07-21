import { ErrorMessage, useField  } from 'formik';

interface Props {
    name: string
    id?: string
    label?: string
    type?: React.HTMLInputTypeAttribute
    className?: string
    touched?: boolean 
    error?: string
    [x: string]: any
}

export const RegisterFormikInputHook = ({ type = 'text', className='form-control', ...props }: Props) => {
   

   return (
      <div className='mb-2'>
         { props.label && <label className='form-label p-0' htmlFor={ props?.id || props.name }>{ props.label }</label> }
         <input type={ type } className={ className } { ...props } />
         { props.touched && <span>{ props.error }</span> }
      </div>
   );
};
