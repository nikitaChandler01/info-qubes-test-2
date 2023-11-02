import React from "react";
import ReactDOM from "react-dom/client";
import data from './mock/data.json';

import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App items={data.products}/>);