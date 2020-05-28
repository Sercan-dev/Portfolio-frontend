import React from 'react';
import { MDBIcon } from "mdbreact";
import { Spring } from 'react-spring/renderprops';


    const Landing = () => {
        return(
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 500, duration: 1500 }}
            >
                {props => (
                    <div style={props}>
                        <div className="App">
                            <div className="banner-text">
                                <h1>Full Stack Web Developer</h1>
                                <hr/>
                                <p>HTML/CSS | JavaScript | React | Python | Django | Wordpress</p>
                                <div className="social-links">
                                    {/* GitHub */}
                                    <a href="https://github.com/Sercan-dev" rel="noopener noreferrer" target="_blank">
                                    <MDBIcon fab icon="github" />
                                    </a>
                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/in/sercan-capraz-21a1081ab/" rel="noopener noreferrer" target="_blank">
                                    <MDBIcon fab icon="linkedin" />
                                    </a>
                                </div>    
                            </div>    
                        </div>
                    </div>
                )}
            </Spring>
        )
    }


export default Landing;