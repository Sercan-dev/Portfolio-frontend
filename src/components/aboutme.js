import React from 'react';
import { Spring } from 'react-spring/renderprops';

    const About = () => {
        return(
            <Spring
                from={{ opacity: 0, marginTop: -500 }}
                to={{ opacity: 1, marginTop: 0 }}
                config={{ delay: 500, duration: 1000 }}
            >
                {props => (
                    <div style={props}>
                        <div className="App">
                            <div className="banner-text">
                                <h1>About Me</h1>
                                <hr/>
                                <p>Hi, my name is Sercan. I'm a Full Stack Web Developer based in Frankfurt, Germany.</p>
                                <p>
                                    <h4>MY STORY</h4>
                                    Through curiosity about the mechanics of software I found my passion for programming and thus developing responsive websites.
                                    Since then I expanded my skillset constantly which allows me to code the server side as well as modern frontend design.
                                </p>
                                <p>
                                    <h4>WHY CHOOSE ME?</h4>
                                    There are many people out there with the ability to build custom websites.
                                    But to me it is all about understanding the purpose and goal of your business to provide you a lasting solution.
                                    If you are looking for a basic web presence, I might not be the right match for you.
                                    However, if you are interested in a website with the "WOW!" effect which gives your business a competitive advantage.
                                <br />
                                <br />
                                <b>I´m the one you are looking for!</b>
                                
                                </p>
                                  
                            </div>    
                        </div>
                    </div>
                )}

            </Spring>
        )
    }


export default About;