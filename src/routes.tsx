import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { userHook } from "./context/userData";
import PrivateRoute from './PrivateRoute';
import Home from "./pages/Home";
import ResertPassword from "./pages/ResetPassword";
import Roadmap from "./pages/Roadmap";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Place from './pages/Place';
import FormPlace from "./pages/Place/Form/FormPlace";
import FormRoadmap from './pages/Roadmap/Form/FormRoadmap';
import EditPlace from './pages/Place/Form/EditPlace';

function AppRoutes() {
  const { userData } = userHook();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/reset" element={<ResertPassword />} />
        <Route path="/cadastrar" element={<SignUp />} />
          <Route path="/painel" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
          } />
          <Route path="/roteiro" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
          } />
          <Route path="/locais" element={
          <PrivateRoute>
            <Place/>
          </PrivateRoute>
          } />
            <Route path="/cadastrar-local" element={
            <PrivateRoute>
              <FormPlace />
            </PrivateRoute>
            } />
            <Route path="/local/editar" element={
              <PrivateRoute>
                <EditPlace />
              </PrivateRoute>
            } />
          <Route path="/cadastrar-roteiro" element={
          <PrivateRoute>
            <FormRoadmap />
          </PrivateRoute>
          } />
          <Route path="/passeios" element={
          <PrivateRoute>
            <Roadmap />
          </PrivateRoute>
          } />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
