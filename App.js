// import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';


import { Box } from '@mui/system';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        BrowserRouter >

        <
        Box style = {
            { marginTop: 54 } } >
        <
        Routes >
        <
        Route exact path = '/'
        element = { < Home / > }
        /> <
        Route path = '/productpage/:id'
        element = { < DetailView / > }
        /> <
        /Routes> <
        /Box> <
        /BrowserRouter>

        <
        /div>
    );
}

export default App;