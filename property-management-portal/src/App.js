import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from './components/Footer/Footer';
import { Property } from 'components/Property/Property';

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path="*" element={<PageNotFound />} />
            
                    <Route path='/property' element={<Property />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
