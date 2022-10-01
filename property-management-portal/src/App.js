import { ReactKeycloakProvider } from '@react-keycloak/web';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { keycloak } from 'Keycloak';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRouter';
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
                    <AppRouter />
                    <Footer />
                </BrowserRouter>

            </ReactKeycloakProvider>
        </div>
    );
}

export default App;
