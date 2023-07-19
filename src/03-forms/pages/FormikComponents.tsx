import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
   
   
   return (
      <div>
         <h1>Formik components tutorial</h1>

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
                     <label htmlFor="firstName">First Name</label>
                     <Field name='firstName' type='text' />
                     <ErrorMessage name='firstName' component='span' />
      
                     <label htmlFor="lastName">Last Name</label>
                     <Field name='lastName' type='text' />
                     <ErrorMessage name='lastName' component='span' />
      
                     <label htmlFor="email">Email address</label>
                     <Field name='email' type='text' />
                     <ErrorMessage name='email' component='span' />
      
                     <label htmlFor="jobType">Job Type</label>
                     <Field name='jobType' as='select' >
                        <option value=''>Pick something</option>
                        <option value='developer'>Developer</option>
                        <option value='designer'>Designer</option>
                        <option value='it-senior'>IT Senior</option>
                        <option value='it-jr'>IT Jr</option>
                     </Field>
                     <ErrorMessage name='jobType' component='span' />
      
                     <label>
                        <Field name='terms' type='checkbox' />
                        Terms and conditions
                     </label>
                     <ErrorMessage name='terms' component='span' />

                     <button type="submit">Submit</button>
                  </Form>
               )
            }
         </Formik>
       
      </div>
   );
};
