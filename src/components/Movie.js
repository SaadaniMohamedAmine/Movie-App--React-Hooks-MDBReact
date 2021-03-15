import React from "react";
import {
  MDBCard,
  MDBCol,
  MDBCardText,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdbreact";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <MDBCol
      xl="3"
      lg="3"
      md="4"
      sm="6"
      xs="11"
      style={{ padding: "1rem 0.75rem" }}
    >
      <MDBCard>
        <MDBCardImage
          top
          left="true"
          width="100%"
          height="300px"
          src={movie.posterUrl}
          overlay="white-slight"
          hover
          waves
          alt="MDBCard image cap"
        />
        <MDBCardBody className="elegant-color white-text rounded-bottom">
          <a href="#!" className="activator waves-effect waves-light mr-4">
            <MDBIcon icon="share-alt" className="white-text" />
          </a>
          <MDBCardTitle>{movie.title}</MDBCardTitle>
          <hr className="hr-light" />
          <MDBCardText className="white-text">
            {movie.description.slice(0, 50)}
          </MDBCardText>
          <div className="black-text d-flex justify-content-end">
            <h5 className="white-text">
              <Link to={`/movies/${movie.title}`}>more details</Link>
              <MDBIcon icon="angle-double-right" className="ml-2" />
            </h5>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Movie;
