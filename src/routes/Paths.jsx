import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/auth/Register";
import RecoveryPassword from "../pages/auth/RecoveryPassword";
import Login from "../pages/auth/Login";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Especialities from "../pages/admin/Especialities";
import Exames from "../pages/admin/Exames";
import Med from "../pages/admin/Med";
import Operadoras from "../pages/admin/Operadoras";
import Pacientes from "../pages/admin/Pacientes";
import Pagamentos from "../pages/admin/Pagamentos";
import Planos from "../pages/admin/Planos";
import Status from "../pages/admin/Status";
import Consultas from "../pages/admin/Consultas";
import SafePath from "./SafePath";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/recovery" element={<RecoveryPassword />} />
                </Route>
                <Route path="/admin" element={<SafePath><AdminLayout /></SafePath>}>
                    <Route index element={<Dashboard />} />
                    <Route path="/admin/users" element={<Users />} />
                    <Route path="/admin/especialities" element={<Especialities />} />
                    <Route path="/admin/consultas" element={<Consultas />} />
                    <Route path="/admin/exames" element={<Exames />} />
                    <Route path="/admin/medicos" element={<Med />} />
                    <Route path="/admin/operadoras" element={<Operadoras />} />
                    <Route path="/admin/pacientes" element={<Pacientes />} />
                    <Route path="/admin/pagamentos" element={<Pagamentos />} />
                    <Route path="/admin/planos" element={<Planos />} />
                    <Route path="/admin/status" element={<Status />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;