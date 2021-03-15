import React from "react";
import { MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import "../App.css";

const Info = () => {
  return (
    <div className="info">
      <h1>Thanks for watching</h1>
      <h3>In case of information or need,please dont hesitate and call me </h3>
      <h3>I will respond as soon as possible !</h3>
      <form className="form">
        <p className="h5 text-center mb-4">Write to us</p>
        <div className="white-text">
          <MDBInput
            label="Your name"
            icon="user"
            group
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            label="Your email"
            icon="envelope"
            group
            type="email"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            label="Subject"
            icon="tag"
            group
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            type="textarea"
            rows="2"
            label="Your message"
            icon="pencil-alt"
            style={{ color: "white" }}
          />
        </div>
        <div className="text-center">
          <MDBBtn outline color="white">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </div>
  );
};

export default Info;
