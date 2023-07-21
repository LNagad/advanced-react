import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

export const NavBar = () => {
   return (
      <nav>
         <img src={logo} alt="React Logo" />
         <ul>
            <li>
               <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
               >Register
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/formik-basic"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
               >Formik basic
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/formik-yup"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
               >Formik yup
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/formik-components"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
               >Formik components
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/formik-abstractation"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
               >Formik abstractation
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/formik-register"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
               >Register formik page
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/formik-abstractation-hook"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
               >Register formik hook page
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/dynamic-form"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
               >Dynamic form
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/users"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
               >Users
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};
