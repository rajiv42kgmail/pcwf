import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Aboutus from './Component/Aboutus';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Render from './Component/Render';
import Form_type from './Component/Form_type';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Header />

                <div id="layoutSidenav">
                    <Navbar />

                    <div id="layoutSidenav_content">
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<Aboutus/>} />
                                <Route path="/render" element={<Render/>} />
                                <Route path="/form_type" element={<Form_type/>} />

                            </Routes>

                        </main>
                        <Footer />

                    </div>
                </div>





            </Router>
        </>
    );
}

export default App;
