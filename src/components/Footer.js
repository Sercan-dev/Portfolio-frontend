import React from 'react';
import '../App.css';



const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4>Beech Way Designs</h4>
                        <ul className="list-unstyled">
                            <li>027392739739</li>
                            <li>Frankfurt, Germany</li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="col">
                        <h4>Stuff</h4>
                        <ul className="list-unstyled">
                            <li>AJAJA</li>
                            <li>haha</li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <h4>Another Stuff</h4>
                        <ul className="list-unstyled">
                            <li>LLLLLL</li>
                            <li>AAAA</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Beech Way Designs GmbH | All rights reserved | Terms of Service
                    </p>
                </div>
            </div>
        </div>
    )
}
  
export default Footer;