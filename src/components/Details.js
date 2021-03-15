import React from 'react'
import '../App.css'
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact'


const Details = ({moviesList}) => {
    
    let path=window.location.pathname ;
    let url="/movies/" ;
    let movieName=path.slice(url.length)
    let movieSearched=moviesList.find(elt=>elt.title.includes(movieName)===true) ;
    return (
        
      <div className="details">
          <MDBCol style={{ maxWidth: "30rem" }}>
        <MDBCard reverse>
          <MDBCardImage cascade style={{ height: '20rem',width:"100%" }} src={movieSearched.posterUrl} />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>You Choised !!</MDBCardTitle>
            <h5 className="indigo-text"><strong>{movieSearched.title}</strong></h5>
            <MDBCardText>{movieSearched.description}</MDBCardText>
            <a href="#!" className="icons-sm li-ic ml-1">
              <MDBIcon fab icon="linkedin-in" /></a>
            <a href="#!" className="icons-sm tw-ic ml-1">
              <MDBIcon fab icon="twitter" /></a>
            <a href="#!" className="icons-sm fb-ic ml-1">
              <MDBIcon fab icon="facebook-f" /></a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </div>
    
    )
}

export default Details
