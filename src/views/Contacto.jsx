import './Contacto.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto() {
 
  return (
    <div>
<h1>Cuentanos, ¿en que te podemos ayudar?</h1>
<div className='formulario'>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripción</Form.Label>
        <Form.Control type="Descripcion" placeholder="" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
</div>
    </div>
  )
}
export default Contacto