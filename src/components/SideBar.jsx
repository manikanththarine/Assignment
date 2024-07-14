import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { GiOpenBook } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa6";
import { IoHelpCircleSharp } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { PiSignOutLight } from "react-icons/pi";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

const SideBar = () => {


  let admindetails = JSON.parse(localStorage.getItem("details"))
console.log(admindetails)
let itterationcount = JSON.parse(localStorage.getItem("itterationcount"))

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <h>Spile</h>

          </Navbar.Brand>
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}></CDBSidebarHeader>
          <span style={{ textAlign: "right", marginLeft: "70%" }}><GiOpenBook style={{ fontSize: "19px" }} />

            Learning Center
          </span>
          <span style={{ marginRight: "-5%" }}>
            <Nav>
              <NavDropdown
                id="nav-dropdown-example"
                title={admindetails.name}
                menuVariant="light"
              >
                <span style={{ marginLeft: "9px" }}>Welcome  </span>
                <NavDropdown.Item > <CgProfile />  Profile</NavDropdown.Item>
                <NavDropdown.Item > <FaLock />    Update User </NavDropdown.Item>
                <NavDropdown.Item ><IoHelpCircleSharp /> Help</NavDropdown.Item>
                <NavDropdown.Item > <GiNetworkBars/> ({340+itterationcount}/480) </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="/"> <PiSignOutLight />  Sign Out </NavDropdown.Item>
              </NavDropdown>


            </Nav>
          </span>
        </Container>
      </Navbar>

      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" >
        <CDBSidebarHeader />
        {/* <CDBSidebarContent> */}
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large" ><a href="/Dashboard">Dashboard</a></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note"><a href="">Users</a></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line" iconType="solid">
              <a href="/Project"> Project</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              <a href="/Paypal"> PayPal Payment</a>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        {/* </CDBSidebarContent> */}

        <CDBSidebarFooter style={{ textAlign: 'center' }}>

        </CDBSidebarFooter>
      </CDBSidebar>
    </>

  );
};

export default SideBar;