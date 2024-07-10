import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from '../auth/authContext'; // Asegúrate de importar el AuthProvider
import Login from '../pages/Login';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { DashboardRouter } from './DashboardRouter';
import { Soporte } from '../pages/Soporte';
import { Callback } from '../pages/Callback';


import IngresosCounter from '../pages/Ingresos';
import EgresosCounter from '../pages/Egresos';

const MyRoutes = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <ToastContainer autoClose={8000} />
                <Routes>
                    <Route path="/*" element={
                        <PrivateRouter>
                            <DashboardRouter />
                           
                        </PrivateRouter>
                    } />
                     <Route path="/ingresos" element={
                        <PrivateRouter>
                           <IngresosCounter />
                        </PrivateRouter>
                    } />

                    <Route path="/egresos" element={
                        <PrivateRouter>
                           <EgresosCounter />
                        </PrivateRouter>
                    } />
                    
                    <Route path="/login" element={
                        <PublicRouter>
                            <Login />
                        </PublicRouter>
                    } />

                    <Route path="/soporte" element={<Soporte />} />
                    
                    <Route path="/callback" element={<Callback />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default MyRoutes;
