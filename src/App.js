import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


// ------ WEB ------
import MainNavigation from './components/MainNavigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Nosotros from './pages/Nosotros';
import Colecta from './pages/Colecta';
import Matrimonios from './pages/servicios_comunidad/Matrimonios';
import CursosPremat from './pages/servicios_comunidad/CursosPremat';
import Bautismos from './pages/servicios_comunidad/Bautismos';
import Reconciliaciones from './pages/servicios_comunidad/Reconciliaciones';
import VisitasEnfermos from './pages/servicios_comunidad/VisitasEnfermos';
import Adoracion from './pages/espiritualidad/Adoracion';
import Liturgia from './pages/espiritualidad/Liturgia';
import Ministros from './pages/espiritualidad/Ministros';
import Coro from './pages/espiritualidad/Coro';
import Meditacion from './pages/espiritualidad/Meditacion';
import CirculosOracion from './pages/espiritualidad/CirculosOracion';
import CiclosConferencias from './pages/espiritualidad/CiclosConferencias';
import Entretiempo from './pages/retiros/Entretiempo';
import Oportunidad from './pages/retiros/Oportunidad';
import Comunitarios from './pages/retiros/Comunitarios';
import Confirmacion from './pages/jovenes/Confirmacion';
import PostConfirmacion from './pages/jovenes/PostConfirmacion';
import Mision from './pages/jovenes/Mision';
import Caritas from './pages/iniciativas_solidarias/Caritas';
import ProyectosComunidad from './pages/iniciativas_solidarias/ProyectosComunidad';
import Footer from './components/Footer';

import Novedad from './pages/Novedad';

// ----ADMIN-----
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './admin/Admin';

import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //The user is or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    });


  }, [dispatch]);

  const routes = (
    <Switch>
      {/* WEB ROUTES */}
      <Route path="/" exact>
        <MainNavigation />
        <Home />
        <Footer />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/nosotros" exact>
        <MainNavigation />
        <Nosotros />
        <Footer />
      </Route>
      <Route path="/novedad/:nid">
        <MainNavigation />
        <Novedad />
        <Footer />
      </Route>
      <Route path="/colecta-virtual" exact>
        <MainNavigation />
        <Colecta />
        <Footer />
      </Route>
      <Route path="/servicios-para-la-comunidad/matrimonios" exact>
        <MainNavigation />
        <Matrimonios />
        <Footer />
      </Route>
      <Route path="/servicios-para-la-comunidad/cursos-prematrimoniales" exact>
        <MainNavigation />
        <CursosPremat />
        <Footer />
      </Route>
      <Route path="/servicios-para-la-comunidad/bautismos" exact>
        <MainNavigation />
        <Bautismos />
        <Footer />
      </Route>
      <Route path="/servicios-para-la-comunidad/reconciliaciones-y-charlas-espirituales" exact>
        <MainNavigation />
        <Reconciliaciones />
        <Footer />
      </Route>
      <Route path="/servicios-para-la-comunidad/visitas-a-enfermos" exact>
        <MainNavigation />
        <VisitasEnfermos />
        <Footer />
      </Route>
      <Route path="/espiritualidad/adoracion" exact>
        <MainNavigation />
        <Adoracion />
        <Footer />
      </Route>
      <Route path="/espiritualidad/liturgia-y-espiritualidad" exact>
        <MainNavigation />
        <Liturgia />
        <Footer />
      </Route>
      <Route path="/espiritualidad/ministros" exact>
        <MainNavigation />
        <Ministros />
        <Footer />
      </Route>
      <Route path="/espiritualidad/coro" exact>
        <MainNavigation />
        <Coro />
        <Footer />
      </Route>
      <Route path="/espiritualidad/meditacion-cristiana" exact>
        <MainNavigation />
        <Meditacion />
        <Footer />
      </Route>
      <Route path="/espiritualidad/circulos-de-oracion" exact>
        <MainNavigation />
        <CirculosOracion />
        <Footer />
      </Route>
      <Route path="/espiritualidad/ciclos-de-conferencias" exact>
        <MainNavigation />
        <CiclosConferencias />
        <Footer />
        <Footer />
      </Route>
      <Route path="/retiros/entretiempo" exact>
        <MainNavigation />
        <Entretiempo />
        <Footer />
      </Route>
      <Route path="/retiros/oportunidad" exact>
        <MainNavigation />
        <Oportunidad />
        <Footer />
      </Route>
      <Route path="/retiros/retiros-comunitarios" exact>
        <MainNavigation />
        <Comunitarios />
        <Footer />
      </Route>
      <Route path="/jovenes/confirmacion" exact>
        <MainNavigation />
        <Confirmacion />
        <Footer />
      </Route>
      <Route path="/jovenes/post-confirmacion" exact>
        <MainNavigation />
        <PostConfirmacion />
        <Footer />
      </Route>
      <Route path="/jovenes/mision" exact>
        <MainNavigation />
        <Mision />
        <Footer />
      </Route>
      <Route path="/iniciativas-solidarias/caritas" exact>
        <MainNavigation />
        <Caritas />
        <Footer />
      </Route>
      <Route path="/iniciativas-solidarias/proyectos-de-la-comunidad" exact>
        <MainNavigation />
        <ProyectosComunidad />
        <Footer />
      </Route>


      {/* ADMIN ROUTES */}
      {user &&
        <ProtectedRoute
          path="/admin"
          component={Admin}
        />
      }

    </Switch>
  )


  return (
    <Router>
      <div className="main-app">
        <div className="main-body">
          {routes}
        </div>
      </div>
    </Router>
  );
}

export default App;
