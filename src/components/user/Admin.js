import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Avatar from "react-avatar";
import UsersList from "./UsersList";
import { useDispatch } from "react-redux";
import { gapi } from "gapi-script";
import { GoogleLogout } from "react-google-login";
import { handleLogOut } from "../../redux/action";
const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "688558443667-21hjlen2re7kncq8st7s7keu8eoh9s2i.apps.googleusercontent.com",
        scope: "",
      });
      gapi.load("client: auth", start);
    }
  }, []);
  return (
    <Container className="px-5">
      <Row className=" p-3 d-flex align-items-center">
        <Col className="d-flex flex-row-reverse px-3">
          <Avatar name={"User Name"} size="100" round={true} color={"grey"} />
        </Col>
        <Col className="px-3 ">User Name</Col>
        <Col className="px-3">
          <GoogleLogout
            buttonText={"Logout"}
            onLogoutSuccess={() => handleLogOut(dispatch)}
            clientId="688558443667-21hjlen2re7kncq8st7s7keu8eoh9s2i.apps.googleusercontent.com"
          />
        </Col>
      </Row>
      <Table responsive bordered hover variant="light" size="md" className="">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <UsersList />
      </Table>
    </Container>
  );
};

export default Admin;
