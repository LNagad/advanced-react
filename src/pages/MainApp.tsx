import { NavBar } from '../components/NavBar';
import { Outlet } from 'react-router-dom';

export const MainApp = () => {
  return (
    <div className='main-layout'>
         
      <NavBar/>

      <main className='container'>
        <Outlet />
      </main>
    </div>
  );
};
