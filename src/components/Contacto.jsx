import "../assets/css/Contacto.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1 className="contacto-title">Contacto</h1>
      <Form className="contacto-form">
        <Form.Group className="contacto-form-group" controlId="formBasicNombre">
          <Form.Label className="contacto-form-label">Nombre</Form.Label>
          <Form.Control
            className="contacto-form-control"
            type="text"
            placeholder="Escriba su nombre"
          />
        </Form.Group>
        <Form.Group className="contacto-form-group" controlId="formBasicEmail">
          <Form.Label className="contacto-form-label">Email</Form.Label>
          <Form.Control
            className="contacto-form-control"
            type="email"
            placeholder="Escriba tu correo ejemplo@email.com"
          />
        </Form.Group>
        <Form.Group
          className="contacto-form-group"
          controlId="formBasicTextArea"
        >
          <Form.Label className="contacto-form-label">Mensaje</Form.Label>
          <Form.Control
            className="contacto-form-control"
            as="textarea"
            rows={3}
            placeholder="Escriba su mensaje"
          />
        </Form.Group>
        <Button className="contacto-button" variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};
