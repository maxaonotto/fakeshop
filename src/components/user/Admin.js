import React from "react";
import { selectUserData } from "../../redux/selectors";
import { useSelector } from "react-redux";

import { Col, Container, Row, Table } from "react-bootstrap";
import Avatar from "react-avatar";
import UsersList from "./UsersList";

const Admin = () => {
  const userData = useSelector(selectUserData);

  return (
    <Container className="px-5">
      <Row className=" p-3 d-flex align-items-center">
        <Col className="d-flex flex-row-reverse px-3">
          <Avatar
            src={userData.imageUrl}
            name={`${userData.name?.firstname} ${userData.name?.lastname}`}
            size="100"
            round={true}
            color={"grey"}
          />
        </Col>
        <Col className="px-3 ">
          {userData.name?.firstname} {userData.lastname}
        </Col>
      </Row>
      <Table responsive bordered hover variant="light" size="md">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th style={{ width: "7%" }}>Actions</th>
          </tr>
        </thead>
        <UsersList />
      </Table>
    </Container>
  );
};

export default Admin;
