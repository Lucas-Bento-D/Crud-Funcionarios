import React from "react";
import {BrowserRouter, Routes , Route } from "react-router-dom"
import AllEmployee from '../AllEmployee'
import Employee from "../Employee";
import Home from "../Home";
import AddNewEmployeeForm from '../AddNewEmployeeForm';
import Header from '../../components/Header'
import Footer from "../../components/Footer";

function Roots(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allEmployees" element={<AllEmployee />} />
                <Route path="/Employee" element={<Employee />} />
                <Route path="/addNewEmployeeForm" element={<AddNewEmployeeForm />} />
            </Routes>
            <Footer />
        </ BrowserRouter>
    );
}

export default Roots;