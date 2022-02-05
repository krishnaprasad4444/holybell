import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreService from "./helpers/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-bnb-gallery/dist/style.css'


const store = StoreService.configureStore();

const history = StoreService.history;

ReactDOM.render(<App {...{ store, history }} />, document.getElementById('root'));
