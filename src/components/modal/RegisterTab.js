import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../redux/reducer/userReducer";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const RegisterTab = ({ onHide }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const user = {
      ...data,
      id: uuidv4(),
      name: {
        firstname: data.firstname,
        lastname: data.lastname,
      },
    };
    dispatch(addNewUser(user));
    onHide();
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {t("Modal.Greet2")} (^_^)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>{t("Modal.Name")}</Form.Label>
              <Form.Control
                placeholder="Enter your name"
                {...register("firstname", {
                  required: "firstname is required",
                })}
              />
              <Form.Label style={{ color: "red" }}>
                {errors?.firstname && <span>{errors?.name.message}</span>}
              </Form.Label>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>{t("Modal.Surname")}</Form.Label>
              <Form.Control
                placeholder="Enter your last name"
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
              <Form.Label>{t("Modal.Email")}</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: "email is required",
                })}
              />
              <Form.Label style={{ color: "red" }}>
                {errors?.email && <span>{errors?.email.message}</span>}
              </Form.Label>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>{t("Modal.Password")}</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
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
              <Form.Label>{t("Modal.Username")}</Form.Label>
              <Form.Control
                placeholder="Enter username"
                {...register("username", {
                  required: "username is required",
                })}
              />
              <Form.Label style={{ color: "red" }}>
                {errors?.username && <span>{errors?.username.message}</span>}
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" as={Col} controlId="formGridPhone">
              <Form.Label>{t("Modal.Phone")}</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter your phone number"
                {...register("phone", {
                  required: "phone is required",
                })}
              />
              <Form.Label style={{ color: "red" }}>
                {errors?.phone && <span>{errors?.phone.message}</span>}
              </Form.Label>
            </Form.Group>
          </Row>
          <Button variant="dark" type="submit">
            {t("Modal.Submit")}
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};
export default RegisterTab;
