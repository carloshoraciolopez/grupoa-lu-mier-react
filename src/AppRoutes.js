/* 
   / > componente
   /formulario > Fomrulario.js
   /login > Login
   etc > Etc
   Dashborad/
   Dashborad/xyz
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Turnos from "./pages/turnos/Turnos";
import ReduxPage from "./pages/redux/ReduxPage";
import ResourcePage from "./Resource/ui/ResourcePage";
import Formulario from './components/Formulario/Formulario';

function AppRoutes () {
    /*1: instalar react-router-dom V6*/
    return (
        <>  
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Turnos/>}/>
                    <Route path="/formulario" element={<Formulario/>}/>
                    <Route path="/redux" element={<ReduxPage/>}/>
                    <Route path="/resources" element={<ResourcePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRoutes;
