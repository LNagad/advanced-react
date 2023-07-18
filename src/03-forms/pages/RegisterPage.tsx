
import { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

   const { 
      name,
      email,
      password1,
      password2,
      formData,

      onChange,
      isValidEmail,
      resetForm 
   } =  useForm({
      name: '',
      email: '',
      password1: '',
      password2: ''
   });

   const onFormSubmit = ( event : FormEvent<HTMLFormElement> ) => {
      event.preventDefault();
      console.log(formData);
   };

   return (
      <div>
         <h1>Register Page</h1>

         <form onSubmit={ onFormSubmit } noValidate>
            <input 
               type="text"
               placeholder="Name" 
               name='name'
               value={ name }
               onChange={ onChange }
               className={`${ name.trim().length <= 0 && 'has-error' }`}
            />
            { name.trim().length <= 0 && <span>This field is required</span> }

            <input 
               type="email"
               placeholder="Email"
               name='email'
               value={ email } 
               onChange={ onChange }
               className={`${ !isValidEmail( email ) && 'has-error' }`}
            />
            { !isValidEmail( email ) && <span>This field is required</span> }

            <input 
               type="password"
               placeholder="Password"
               name='password1'
               value={ password1 } 
               onChange={ onChange }
            />

            { password1.trim().length <= 0 && <span>This field is required</span> }
            { password2.trim().length <= 6 && <span>The password length must be greather than 6 characters</span> }

            <input 
               type="password"
               placeholder="Repeat Password" 
               name='password2'
               value={ password2 }
               onChange={ onChange }
            />

            { password2.trim().length <= 0 && <span>This field is required</span> }
            { password1 !== password2 && <span>Password does not match</span> }

            <button type="submit">Create</button>
            <button onClick={ resetForm } type="button">Reset Form</button>
         </form>
      </div>
   );
};
