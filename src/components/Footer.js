import React from 'react';
import '../App.css';
import { MDBIcon } from "mdbreact";



const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4>Beech Way Design</h4>
                        <ul className="list-unstyled">
                            <li>Frankfurt, Germany</li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="col">
                        <h4></h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://github.com/Sercan-dev" rel="noopener noreferrer" target="_blank">
                                <MDBIcon fab icon="github" />
                                </a>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <h4></h4>
                        <ul className="list-unstyled">
                            <li>
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <MDBIcon fab icon="linkedin" />
                            </a>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Beech Way Design | All rights reserved 
                    </p>
                </div>
            </div>
        </div>
    )
}
  
export default Footer;