import React from 'react';
import './App.css';
import Header from 'components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'components/Home/Home';
import PageNotFound from 'components/PageNotFound/PageNotFound';
import Footer from 'components/Footer/Footer';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { keycloak } from './Keycloak';
import { PrivateRoute } from 'components/PrivateRoute';
import { SecuredPage } from 'components/SecuredPage';
import PropertyDetail from 'components/PropertyDetail/PropertyDetail';
import { Property } from 'components/Property/Property';
import FavoriteProperty from "./components/FavoriteProperty/FavoriteProperty";
import PropertySearchList from './components/PropertyList/PropertySearchList';

function App() {
    return (
        <div className="App">
            <ReactKeycloakProvider authClient={keycloak}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/property-list" element={<PropertySearchList />} />
                        <Route path="/property-detail/" element={<PropertyDetail open={true} />} />
                        <Route path="/property" element={<Property />} />
                        <Route path="/favorites" element={<FavoriteProperty/>} />
                        <Route path="/secured" element={
                            <PrivateRoute>
                                <SecuredPage />
                            </PrivateRoute>
                        } />
                        <Route path="*" element={<PageNotFound />} />

                    </Routes>
                    <Footer />
                </BrowserRouter>

            </ReactKeycloakProvider>
        </div>
    );
}

export default App;
