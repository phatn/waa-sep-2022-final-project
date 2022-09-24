import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from './components/Footer/Footer';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { keycloak } from "./Keycloak";
import { PrivateRoute } from "./components/PrivateRoute";
import { SecuredPage } from "./components/SecuredPage";
import PropertyDetail from "./components/PropertyDetail/PropertyDetail";

import { Property } from 'components/Property/Property';

function App() {
    return (
        <div className="App">
            <ReactKeycloakProvider authClient={keycloak}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path="/property-detail" element={<PropertyDetail />} />
                    <Route path="/secured" element={
                        <PrivateRoute>
                            <SecuredPage />
                        </PrivateRoute>
                    } />
                    <Route path="*" element={<PageNotFound />} />
            
                    <Route exact path='/property' element={<Property />} />
                </Routes>
            </BrowserRouter>
            <Footer />
            </ReactKeycloakProvider>
        </div>
    );
}

export default App;
