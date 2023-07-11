import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Aboutus from './Component/Aboutus';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Render from './Component/Render';
import Form_list from './Component/Form_list';
import Roles from './Component/Roles';
import Roleslist from './Component/Roleslist';
import Userlist from './Component/Userlist';
import Manageuser from './Component/Manageuser';
import ManageForm from './Component/ManageForm';
import FormRecord from './Component/FormRecord';

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
                                <Route path="/form_list" element={<Form_list/>} />
                                <Route path="/roles" element={<Roles/>} />
                                <Route path="/roleslist" element={<Roleslist/>} />
                                <Route path="/userlist" element={<Userlist/>} />
                                <Route path="/manageuser" element={<Manageuser/>} />
                                <Route path="/manageuser/:id" element={<Manageuser/>} />
                                <Route path="/manageform" element={<ManageForm/>} />
                                <Route path="/manageform/:id" element={<ManageForm/>} />
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
