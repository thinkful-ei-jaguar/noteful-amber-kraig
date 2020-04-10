import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
//import App from './App';
//import Appnew from './Appnew';
//import Testapp from './Testapp';
import AppContext from './AppContext.js';

//import App from './Routing';

ReactDOM.render(<BrowserRouter><AppContext /></BrowserRouter>, document.getElementById('root'));


