import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Avatar from "react-avatar";
import useUserId from "../../hooks/useUserId";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { editUser } from "../../redux/reducer/userReducer";
import { useDispatch } from "react-redux";

const User = () => {
  const [user] = useUserId();
  const dispatch = useDispatch();
  const handleEditUser = (data) => {
    dispatch(editUser({ ...data, id: user.id }));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Card
      key={user.id}
      size="lg"
      aria-labelledby="contained-Card-title-vcenter"
      className="mx-5"
    >
      <Card.Body>
        <Form onSubmit={handleSubmit(handleEditUser)}>
          <Row className="mb-3 d-flex align-items-end">
            <Col className="px-3 d-flex justify-content-center">
              <Avatar
                name={`${user?.name?.firstname} ${user?.name?.lastname}`}
                size="100"
                round={true}
                color={"grey"}
              />
            </Col>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="text-capitalize"
                placeholder={user?.name?.firstname}
                {...register("firstname", {
                  required: "firstname is required",
                })}
              />
              <Form.Label style={{ color: "red" }}>
                {errors?.firstname && <span>{errors?.firstname.message}</span>}
              </Form.Label>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>

              <Form.Control
                className="text-capitalize"
                placeholder={user?.name?.lastname}
                {...register("lastname", {
                  required: "lastname is required",
                })}
              />
              <Form.Label style={{ color: "red" }}>
                {errors?.lastname && <span>{errors?.lastname.message}</span>}
              </Form.Label>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={user?.email}
                {...register("email", {
                  required: "email is required",
                })}
              />
              <Form.Label style={{ color: "red" }}>
                {errors?.email && <span>{errors?.email.message}</span>}
              </Form.Label>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="********"
                {...register("password", {
                  required: "password is required",
                })}
              />
              <Form.Label style={{ color: "red" }}>
                {errors?.password && <span>{errors?.password.message}</span>}
              </Form.Label>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                placeholder={user?.username}
                {...register("username", {
                  required: "username is required",
                })}
              />
              <Form.Label style={{ color: "red" }}>
                {errors?.username && <span>{errors?.username.message}</span>}
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" as={Col} controlId="formGridPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="phone"
                placeholder={user?.phone}
                {...register("phone", {
                  required: "phone is required",
                })}
              />
              <Form.Label style={{ color: "red" }}>
                {errors?.phone && <span>{errors?.phone.message}</span>}
              </Form.Label>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                className="text-capitalize"
                placeholder={user?.address?.city}
              />
            </Form.Group>
            <Form.Group className="mb-3" as={Col} controlId="formGridAddress">
              <Form.Label>Street</Form.Label>
              <Form.Control
                className="text-capitalize"
                placeholder={user?.address?.street}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control placeholder={user?.address?.number} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>ZipCode</Form.Label>
              <Form.Control placeholder={user?.address?.zipcode} />
            </Form.Group>
          </Row>
          <Button type="submit" variant="dark" className="my-3">
            Save Changes
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default User;
