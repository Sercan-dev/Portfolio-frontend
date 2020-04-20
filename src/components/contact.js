import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const FormPage = () => {
    return (
    <MDBContainer>
    <MDBRow className="d-flex justify-content-center">
        <MDBCol md="8">
        <form className="form" method="POST" dat-netlify="true">
            <p className="h5 text-center mb-4">Write me</p>
            <div className="grey-text">
            <MDBInput 
                label="Your name" 
                name="name"
                icon="user" 
                group type="text" 
                validate error="wrong"
                success="right" />
            <MDBInput 
                label="Your email"
                name="email"
                icon="envelope" 
                group type="email" 
                validate error="wrong"
                success="right" />
            <MDBInput 
                label="Subject" 
                name="subject"
                icon="tag" 
                group type="text" 
                validate error="wrong" 
                success="right" />
            <MDBInput 
                type="textarea" 
                rows="2" 
                label="Your message" 
                name=" message"
                icon="pencil-alt" />
            </div>
            <div className="text-center">
            <MDBBtn outline color="success">
                Send
                <MDBIcon far icon="paper-plane" className="ml-1" />
            </MDBBtn>
            </div>
        </form>
        </MDBCol>
    </MDBRow>
    </MDBContainer>
    );
};

export default FormPage;