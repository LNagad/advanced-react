import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import { useDynamicForm } from '../hooks/useDynamicForm';

export const DynamicForm = () => {

   const { formJson, initialValues, validationSchema } = useDynamicForm();

   return (
      <div>

         <h1>Dynamic Form</h1>

         <Formik
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit={ (values) => {
               console.log(values);
            }}
         >
            { (formik) => (
                
               <Form noValidate>
                  {
                     formJson.map( ({ name, type, label, placeholder, options }) => {
                        
                        if ( type === 'input' || type === 'password' || type === 'email') {
                           return (
                              <MyTextInput 
                                 key={ name } 
                                 name={ name } 
                                 type={ type }
                                 label={ label } 
                                 placeholder={ placeholder} 
                              />
                           );

                        } else if ( type === 'select' ) {
                           return (
                              <MySelect 
                                 key={ name } 
                                 name={ name } 
                                 label={ label }>

                                 <option value="">Select an option</option>

                                 { 
                                    options?.map( ({ id, label }) => (
                                       <option key={ id } value={ id }>{ label }</option>
                                    ))       
                                 }
                              </MySelect>
                           );
                        }

                        throw new Error (`The type ${ type } is not supported`);
                     })
                  }
                  <button type="submit">Submit</button>
               </Form>
            )}
         </Formik>
      </div>
   );
};
