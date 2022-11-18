import {Navigate,Route, Outlet} from 'react-router-dom'
import {useContext } from 'react'
import AppContext from '../context/app-context'
export default function PublicRoute  ({component: Component, ...rest}) {
       const {isLogin} = useContext(AppContext);

       if (rest.path === "/authentication/confirmation") {
    return (

       
             localStorage.getItem('toConfirmUser') ?
              <Outlet />
            : <Navigate to="/authentication/login" />
       
    )

  }else{

 return (

        isLogin ? <Outlet />
            : <Navigate to="/authentication/login" />
    )

     }


     
};
