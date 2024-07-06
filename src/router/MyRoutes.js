import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
import { DashboardRouter } from './DashboardRouter'
import { Soporte } from '../pages/Soporte'
import { Callback } from '../pages/Callback'


const MyRoutes = () => {
    return(
            <>
                <BrowserRouter>
                    <ToastContainer autoClose={8000} />
                    <Routes>
                        <Route path="/*" element= {
                            <PrivateRouter>
                                <DashboardRouter />
                            </PrivateRouter>
                        }
                        />
                        
                        <Route path="/login" element= {
                            <PublicRouter>
                                <Login />
                            </PublicRouter>
                        }
                        />

                        <Route path="/soporte" element= {
                                <Soporte />
                        }
                        />
                        
                        <Route path="/callback" element= {
                                <Callback />
                        }
                        />
                    </Routes>
                </BrowserRouter>
            </>
    )
}

export default MyRoutes