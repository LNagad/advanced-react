import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

export const NavBar = () => {
   return (  
      <nav>
         <img src={ logo } alt="React Logo" />
         <ul>
            <li>
               <NavLink to='/register' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register</NavLink>
            </li>
            <li>
               <NavLink to='/formik-basic' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik basic</NavLink>
            </li>
            <li>
               <NavLink to='/users' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
            </li>
         </ul>
      </nav>
   );
};
