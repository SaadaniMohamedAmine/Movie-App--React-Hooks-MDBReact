import React from "react";
import "../App.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBFooter,
  MDBContainer,
  MDBBtn,
} from "mdbreact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="intro">
      <div className="home-page">
        <div className="home-desc">
          <h2 className="intr">Movie at home !</h2>
          <h4 className="full-op">Just a click below and start the fun !</h4>
          <div className="btn-group">
            <MDBBtn
              style={{
                backgroundColor: "transparent",
                borderRadius: "30px",
                padding: "1.5rem 4rem",
                fontWeight: "bold",
                textShadow: "6px 2px 6px #fff",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/movies"
              >
                Movies List
              </Link>
            </MDBBtn>
          </div>
        </div>
      </div>
      <div
        className="sub-intro"
        style={{
          minHeight: "50vh",
          backgroundColor: "rgba(80, 197, 183,0.4)",
          padding: "2rem",
        }}
      >
        <MDBRow
          style={{ margin: "2rem auto" }}
          className="d-flex justify-content-center align-items-center"
        >
          <MDBCol style={{ maxWidth: "30rem", marginBottom: "1rem" }}>
            <MDBCard reverse>
              <MDBCardImage
                cascade
                style={{ height: "15rem" }}
                src="https://neconnected.co.uk/wp-content/uploads/2020/05/movies.jpg"
              />
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle>Watch movies</MDBCardTitle>
                <h5 className="indigo-text">
                  <strong>Choose One and start the fun !</strong>
                </h5>
                <MDBCardText>
                  Many movies are there,so choose one,read the description ,pick
                  up your corn flakes bowl and amuse with siblings !
                </MDBCardText>
                <a href="#!" className="icons-sm li-ic ml-1">
                  <MDBIcon fab icon="linkedin-in" />
                </a>
                <a href="#!" className="icons-sm tw-ic ml-1">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="icons-sm fb-ic ml-1">
                  <MDBIcon fab icon="facebook-f" />
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol style={{ maxWidth: "30rem" }}>
            <MDBCard reverse>
              <MDBCardImage
                cascade
                style={{ height: "15rem" }}
                src="https://qph.fs.quoracdn.net/main-qimg-4da787cab7719d97f596fda4db54963c"
              />
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle>Rate movies</MDBCardTitle>
                <h5 className="indigo-text">
                  <strong>Your rate help to improve our services</strong>
                </h5>
                <MDBCardText>
                  After watching the movie,you can rate it.This rate help us to
                  give us good idea about your trending !
                </MDBCardText>
                <a href="#!" className="icons-sm li-ic ml-1">
                  <MDBIcon fab icon="linkedin-in" />
                </a>
                <a href="#!" className="icons-sm tw-ic ml-1">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="icons-sm fb-ic ml-1">
                  <MDBIcon fab icon="facebook-f" />
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow
          style={{ margin: "1rem auto" }}
          className="d-flex justify-content-center align-items-center"
        >
          <MDBCol style={{ maxWidth: "30rem", marginBottom: "1rem" }}>
            <MDBCard reverse>
              <MDBCardImage
                cascade
                style={{ height: "15rem" }}
                src="https://www.realmomnutrition.com/wp-content/uploads/101-Movies.png"
              />
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle>All Categories</MDBCardTitle>
                <h5 className="indigo-text">
                  <strong>Family,romantic,child,adventure and action</strong>
                </h5>
                <MDBCardText>
                  With us,you will find any category you want.Family
                  movies,romantic and adolescences ones.Also,anything to search!{" "}
                </MDBCardText>
                <a href="#!" className="icons-sm li-ic ml-1">
                  <MDBIcon fab icon="linkedin-in" />
                </a>
                <a href="#!" className="icons-sm tw-ic ml-1">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="icons-sm fb-ic ml-1">
                  <MDBIcon fab icon="facebook-f" />
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol style={{ maxWidth: "30rem" }}>
            <MDBCard reverse>
              <MDBCardImage
                cascade
                style={{ height: "15rem" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQf5lQvl2heYkUNa1SYRal36u0rTsLQXynJg&usqp=CAU"
              />
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle>Keep Following !</MDBCardTitle>
                <h5 className="indigo-text">
                  <strong>Regular updates for anything you deserve !</strong>
                </h5>
                <MDBCardText>
                  Another important thing,Our list is always updated,so don't
                  worry about the new movies.Everything is here !
                </MDBCardText>
                <a href="#!" className="icons-sm li-ic ml-1">
                  <MDBIcon fab icon="linkedin-in" />
                </a>
                <a href="#!" className="icons-sm tw-ic ml-1">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="icons-sm fb-ic ml-1">
                  <MDBIcon fab icon="facebook-f" />
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="footer">
        <MDBFooter
          className="font-small pt-4 "
          style={{ backgroundColor: "rgba(80, 197, 183,0.9)" }}
        >
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6" xs="12">
                <h5 className="title">Movies Forever</h5>
                <p>
                  Thanks for visiting our website,wish that you are amused !
                </p>
              </MDBCol>
              <MDBCol md="6" xs="12">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled">
                    <div>
                      <Link to="/">Home</Link>
                    </div>
                  </li>
                  <li className="list-unstyled">
                    <div >
                      <Link to="/movies">Movies</Link>
                    </div>
                  </li>
                  <li className="list-unstyled">
                    <div>
                      <Link to="/more">More informations</Link>
                    </div>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="/"> Mohamed Amine Saadani </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};

export default Home;
