

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { RegisterFormikInput } from '../components';

const myValidationSchema = Yup.object({
   name: Yup.string()
      .min(2, 'This field requires a minimum of 2 characters')
      .max(15, 'Maximum of 10 characters allowed' )
      .required('This field is required'),
   email: Yup.string()
      .email('Invalid email format')
      .required('This field is required'),
   password1: Yup.string()
      .min(6, 'This field requires a minimum of 6 characters')
      .required('This field is required'),
   password2: Yup.string()
      .min(6, 'This field requires a minimum of 6 characters')
      .oneOf([ Yup.ref('password1') ], 'Passwords must match')
      .required('This field is required')
});

export const RegisterFormikPage = () => {


   return (
      <div>
         <h1>Register formik page</h1>

         <Formik initialValues={{
            name: '',
            email: '',
            password1: '',
            password2: ''
         }}
         onSubmit={ ( values ) => console.log(values) }
         validationSchema={ myValidationSchema }
         >
            {( { handleReset } ) => (
               <Form style={{ width: '350px'}}>

                  <RegisterFormikInput name='name' label='First name' />

                  <RegisterFormikInput name='email' id='email' type='email' label='Email address' />
                
                  <RegisterFormikInput name='password1' type='password' label='Password' />
                  
                  <RegisterFormikInput name='password2' type='password' label='Repeat password' />
                  
                  <div className='d-flex justify-content-between '>
                     <button className='btn btn-light' onClick={ handleReset } type="button">Reset Form</button>
                     <button className='btn btn-primary' type="submit">Create</button>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};
