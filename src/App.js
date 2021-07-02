import React from 'react';

import {
	BrowserRouter as Router,
	// HashRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Project from './Components/Project/Project';

import './App.css';

function App() {
    return (
        <div className="App">
	        <Router>
	            <Nav />
	            <Switch>
	           		<Route path="/" exact component={Home}/>
	           		<Route path="/gallery" component={Gallery}/>
	           		<Route path="/projects" component={Project}/>
	           		<Route path="/contact" component={Contact}/>
	           		<Route path="/about" component={About}/>
	           	</Switch>
	            <Footer />
	        </Router>
        </div>
    );
}

export default App;