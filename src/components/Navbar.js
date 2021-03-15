import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const bgPink = { backgroundColor: "rgba(80, 197, 183,0.9)" };
    return (
      <header>
        <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
          <MDBNavbarBrand>
            <strong>Movies Forever</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.onClick} />
          <MDBCollapse
            isOpen={this.state.collapse}
            navbar
            style={{ color: "#e50914" }}
          >
            <MDBNavbarNav left></MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/movies">Movies</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/more">More</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">
                  <MDBIcon fab icon="facebook-f" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">
                  <MDBIcon fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">
                  <MDBIcon fab icon="instagram" />
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    );
  }
}

export default Navbar;
