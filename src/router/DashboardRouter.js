import { useContext } from "react";
import { Routes, Route } from "react-router-dom"
import { AuthContext } from "../auth/authContext"
import Home from "../pages/Home"
import Recibos from "../pages/Recibos"
import Dependencias from "../pages/Dependencias"
import Labor from "../pages/Labor"
import Instituto from "../pages/Instituto"
import Visitas from "../pages/Visitas"
import E404 from "../pages/errors/E404"
import Help from "../pages/Help";
import Credencial from "../pages/Credencial";
import Qr from "../pages/Qr";

export const DashboardRouter = () => {
    const { state } = useContext(AuthContext);
    const { user } = state;

    return (
        <>
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="credencial" element={<Credencial user={user} />} />
                <Route path="qr" element={<Qr user={user} />} />
                <Route path="recibos" element={<Recibos user={user} />} />
                <Route path="dependencias" element={<Dependencias user={user} />} />
                <Route path="labor" element={<Labor user={user} />} />
                <Route path="ilcp" element={<Instituto user={user} />} />
                <Route path="visitas" element={<Visitas user={user} />} />
                <Route path="ayuda" element={<Help user={user} />} />
                <Route path="/*" element={<E404 user={user} />} />
            </Routes>
        </>
    );
}
