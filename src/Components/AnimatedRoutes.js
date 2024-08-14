// dependencies
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { useContext } from "react";

// contexts
import { AuthProvider, AuthContext } from "../contexts/auth";

// components
import Initial from './Initial';
import LoginForm from "./LoginForm.js";
import Home from "./Home.js";
import Message from "./Message.js";
import Profile from "./Profile.js";
import RegisterForm from "./RegisterForm.js";
import RegisterPet from "./RegisterPet.js";
import Header from "./Header";
import Footer from "./Footer";

const AnimatedRoutes = () => {
  const location = useLocation();

  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to='/login' />;
    }

    return children;
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <AuthProvider>
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<Initial />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/cadastro' element={<RegisterForm />} />
          <Route path='/cadastro_animal' element={<Private><RegisterPet /></Private>} />
          <Route path='/home' element={<Private><Home /></Private>} />
          <Route path='/mensagem' element={<Private><Message /></Private>} />
          <Route path='/perfil' element={<Private><Profile /></Private>} />
        </Routes>
        <Footer />
      </AuthProvider>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;