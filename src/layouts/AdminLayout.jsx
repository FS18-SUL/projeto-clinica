import { NavLink, Outlet } from "react-router";

const AdminLayout = () => {
    return (
        <div className="h-screen w-screen flex gap-4 p-4 ">
          
            <header className="w-[270px] min-w-60 bg-white rounded-md p-4 h-fit">
                <h1 className="text-center">LOGO</h1>
                <nav className="grid gap-3 min-w-50  mt-6 *:leading-[40px]  *:border *:border-slate-300 *:pl-4 *:rounded *:text-slate-500 *:duration-150 pb-6">
                    <NavLink end className="hover:bg-slate-500 hover:text-white [&.active]:bg-slate-500 [&.active]:text-white" to="/admin">Dashboard</NavLink>
                    <NavLink end className="hover:bg-slate-500 hover:text-white [&.active]:bg-slate-500 [&.active]:text-white" to="/admin/users">Usuários</NavLink>
                    <NavLink end className="hover:bg-slate-500 hover:text-white [&.active]:bg-slate-500 [&.active]:text-white" to="/admin/especialities">Especialidades</NavLink>
                    <NavLink end className="hover:bg-slate-500 hover:text-white [&.active]:bg-slate-500 [&.active]:text-white" to="/admin/consultas">Consultas</NavLink>
                    <NavLink end className="hover:bg-slate-500 hover:text-white [&.active]:bg-slate-500 [&.active]:text-white" to="/admin/exames">Exames</NavLink>
                    <NavLink end className="hover:bg-slate-500 hover:text-white [&.active]:bg-slate-500 [&.active]:text-white" to="/admin/medicos">Médicos</NavLink>
                    <NavLink end className="hover:bg-slate-500 hover:text-white [&.active]:bg-slate-500 [&.active]:text-white" to="/admin/operadoras">Operadoras</NavLink>
                    <NavLink end className="hover:bg-slate-500 hover:text-white [&.active]:bg-slate-500 [&.active]:text-white" to="/admin/pacientes">Pacientes</NavLink>
                    <NavLink end className="hover:bg-slate-500 hover:text-white [&.active]:bg-slate-500 [&.active]:text-white" to="/admin/pagamentos">Pagamentos</NavLink>
                    <NavLink end className="hover:bg-slate-500 hover:text-white [&.active]:bg-slate-500 [&.active]:text-white" to="/admin/planos">Planos</NavLink>
                    <NavLink end className="hover:bg-slate-500 hover:text-white [&.active]:bg-slate-500 [&.active]:text-white" to="/admin/status">Status</NavLink>
                </nav>
            </header>
            
            <div className="flex-1 p-4 rounded-md overflow-auto min-w-80">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;