
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: {[ key: string ]: any} = {};
const fieldsWithValidations: {[ key: string ]: any} = {};
 
for (const input of formJson) {
 
   initialValues[ input.name ] = input.value;
 
   if ( !input.validations ) continue; // do not break teh cicle
 
   let schema = Yup.string();
 
   for (const rule of input.validations ) {
 
      if ( rule.type === 'required' ) {
         schema = schema.required( 'This field is required' );
      } 
 
      if ( rule.type === 'minLength' ) {
         const min = (rule as any).value || 2;
         schema = schema.min(min, `Please enter at least ${min} characters for this field.`);
      } 
 
      if ( rule.type === 'email' ) {
         schema = schema.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email format');
      }
 
      //? others rules...
   }
    
   fieldsWithValidations[ input.name ] = schema;
 
}
 
const validationSchema = Yup.object( { ...fieldsWithValidations });

export const useDynamicForm = () => {

   return {
      formJson,
      initialValues,
      fieldsWithValidations,
      validationSchema
   };
};
