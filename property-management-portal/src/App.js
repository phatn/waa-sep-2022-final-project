import { ReactKeycloakProvider } from '@react-keycloak/web';
import Dashboard from 'components/Dashboard/Dashboard';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import PageNotFound from 'components/PageNotFound/PageNotFound';
import { PrivateRoute } from 'components/PrivateRoute';
import { Property } from 'components/Property/Property';
import PropertyDetail from 'components/PropertyDetail/PropertyDetail';
import { SecuredPage } from 'components/SecuredPage';
import { keycloak } from 'Keycloak';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PropertySearchList from './components/PropertyList/PropertySearchList';
import { storeToken } from './Utils';

function App() {
    const handleOnEvent = async (event, error) => {
        console.log(event);
        if (event === 'onAuthSuccess') {
            if (keycloak.authenticated) {
                storeToken(keycloak.token);
            }
        }
    };

    return (
        <div className="App">
            <ReactKeycloakProvider authClient={keycloak} onEvent={handleOnEvent}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/property-list" element={<PropertySearchList />} />
                        <Route path="/property-detail/:id" element={<PropertyDetail open={true} />} />
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
