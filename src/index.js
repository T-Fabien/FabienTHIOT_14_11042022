import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Pages
import CreateEmployee from './pages/Create_Employee'
import EmployeeList from './pages/Employee_List';

// Styles

import './styles/Header.css'

import './styles/Employee_List.css';
import './styles/Create_Employee.css';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Router>
      <Routes>
        <Route exact path="" element={<CreateEmployee />}/>
        <Route exact path="/employee-list" element={<EmployeeList />}/>
        <Route exact path="*" element={<CreateEmployee />}/>
      </Routes>
    </Router>
);
