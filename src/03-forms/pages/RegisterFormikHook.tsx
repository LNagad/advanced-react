import { Formik, Form, useFormik, useFormikContext } from 'formik';
import * as Yup from 'yup';

import { RegisterFormikInputHook as RegisterInput } from '../components';

const myValidationSchema = Yup.object({
   name: Yup.string()
      .min(2, 'This field requires a minimum of 2 characters')
      .max(15, 'Maximum of 10 characters allowed')
      .required('This field is required'),
   email: Yup.string()
      .email('Invalid email format')
      .required('This field is required'),
   password1: Yup.string()
      .min(6, 'This field requires a minimum of 6 characters')
      .required('This field is required'),
   password2: Yup.string()
      .min(6, 'This field requires a minimum of 6 characters')
      .oneOf([Yup.ref('password1')], 'Passwords must match')
      .required('This field is required'),
});


export const RegisterFormikHook = () => {

   const formik = useFormik({
      initialValues: {
         name: '',
         email: '',
         password1: '',
         password2: '',
      },
      onSubmit: (values) => console.log(values),
      validationSchema: myValidationSchema,
   });

   return (
      <div>
         <h1>Register formik context page</h1>

         <form
            noValidate
            onSubmit={formik.handleSubmit}
            style={{ width: '350px' }}
         >
            <RegisterInput
               error={formik.errors.name}
               touched={formik.touched.name}
               {...formik.getFieldProps('name')}
               label="First name"
            />

            <RegisterInput
               error={formik.errors.email}
               touched={formik.touched.email}
               {...formik.getFieldProps('email')}
               id="email"
               type="email"
               label="Email address"
            />

            <RegisterInput
               error={formik.errors.password1}
               touched={formik.touched.password1}
               {...formik.getFieldProps('password1')}
               type="password"
               label="Password"
            />

            <RegisterInput
               error={formik.errors.password2}
               touched={formik.touched.password2}
               {...formik.getFieldProps('password2')}
               type="password"
               label="Repeat password"
            />

            <div className="d-flex justify-content-between ">
               <button
                  className="btn btn-light"
                  onClick={formik.handleReset}
                  type="button"
               >Reset Form
               </button>
               <button className="btn btn-primary" type="submit">Create
               </button>
            </div>
         </form>
      </div>
   );
};
