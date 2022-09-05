import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Avatar from "react-avatar";
import UsersList from "./UsersList";
import { logout } from "../../redux/reducer/userReducer";
import { useDispatch } from "react-redux";
const Admin = () => {
  const dispatch = useDispatch();
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <Container className="px-5">
      <Row className=" p-3 d-flex align-items-center">
        <Col className="d-flex flex-row-reverse px-3">
          <Avatar name={"User Name"} size="100" round={true} color={"grey"} />
        </Col>
        <Col className="px-3 ">User Name</Col>
        <Col className="px-3">
          <Button variant="dark" onClick={handleLogOut}>
            Log Out
          </Button>
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
