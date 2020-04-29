import React from 'react';
import './App.css';
import LandingPage from './components/landingpage';
import AboutMe from './components/aboutme';
import Contact from './components/contact';
import Projects from './components/projects';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
 
  } from "react-router-dom";

function App() {
    return (
        <div className="page-container">
            <div className="content-wrap">
                
                <Router>
                <Navbar />
                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                    <Route  path ='/' component={LandingPage} exact from='/' to="/landingpage" ></Route>   
                    <Route path="/landingpage" component={LandingPage}>
                        <LandingPage />
                    </Route>
                    <Route path="/aboutme" component={AboutMe}>
                        <AboutMe />
                    </Route>
                    <Route path="/projects" component={Projects}>
                        <Projects />
                    </Route>
                    <Route path="/contact" component={Contact}>
                        <Contact />
                    </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    );
}


export default App;
