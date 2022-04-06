import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom";

// You'll need to wrap <App /> for routing to work
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
