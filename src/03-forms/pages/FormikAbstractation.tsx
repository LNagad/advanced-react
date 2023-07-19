import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput, MySelect, MyCheckbox } from '../components';

import '../styles/styles.css';

export const FormikAbstractation = () => {
   
   return (
      <div>
         <h1>Formik Abstractation </h1>

         <Formik
            initialValues={{
               firstName: '',
               lastName: '',
               email: '',
               terms: false,
               jobType: ''
            }}
            onSubmit={( values ) => {
               console.log( values );
            }}
            validationSchema={
               Yup.object({
                  firstName: Yup.string()
                     .max(15, 'This field should be 15 characters or less')
                     .required('This field is required'),
                  lastName: Yup.string()
                     .max(15, 'This field should be 15 characters or less')
                     .required('This field is required'),
                  email: Yup.string()
                     .email('Invalid email address')
                  //   .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email address')
                     .required('This field is required'),
                  terms: Yup.boolean()
                     .oneOf([true], 'Must accept the terms and conditions'),
                  jobType: Yup.string()
                     .notOneOf([ 'it-jr' ], 'This option is not allowed')
                     .required('This field is required')
                     
               })
            }
         >
            {
               ( formik ) => (
                  <Form>
                     <MyTextInput 
                        label='First Name' 
                        name='firstName'
                        placeholder='Type your name' 
                     />

                     <MyTextInput 
                        label='Last Name' 
                        name='lastName'
                        placeholder='Type your last name' 
                     />
                  
                     <MyTextInput 
                        label='Email address' 
                        name='email'
                        type='email'
                        placeholder='email@google.com' 
                     />
                     
                     <MySelect className='form-select' label='Job Type' name='jobType' >
                        <option value=''>Pick something</option>
                        <option value='developer'>Developer</option>
                        <option value='designer'>Designer</option>
                        <option value='it-senior'>IT Senior</option>
                        <option value='it-jr'>IT Jr</option>
                     </MySelect>
      
                     <MyCheckbox label='Terms & Conditions' name='terms' />
                     
                     <button type="submit">Submit</button>
                  </Form>
               )
            }
         </Formik>
       
      </div>
   );
};
