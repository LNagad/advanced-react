import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

   const { handleSubmit, errors, touched, getFieldProps } = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
      },
      onSubmit: (values) => {
         console.log(values);
      },
      validationSchema: Yup.object({
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
      }),
   });
   
   return (
      <div>
         <h1>Formik yup tutorial</h1>

         <form onSubmit={ handleSubmit } noValidate>

            <label htmlFor="firstName">First Name</label>
            <input type="text" { ...getFieldProps('firstName')} />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

            <label htmlFor="lastName">Last Name</label>
            <input type="text" { ...getFieldProps('lastName')} />
            { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

            <label htmlFor="email">Email address</label>
            <input type="email" { ...getFieldProps('email')} />
            { touched.email && errors.email && <span>{ errors.email }</span> }

            <button type="submit">Submit</button>
         </form>
      </div>
   );
};
