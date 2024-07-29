//formulario de contacto
import "../assets/css/Contacto.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Contacto = () => {
  return (
    <>
      <div className="contacto">
        <h1>Contacto</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Escriba su nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Escriber tu correo ejemplo@email.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTextArea">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
