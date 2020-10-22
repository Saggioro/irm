import React from 'react';
import {Card, Button, Form, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

function App() {
  return (
  
    <div className="App">
      <Form>
        <Card>
          <Card.Header>
            <Card.Title>
              Cadastro

            </Card.Title>
          </Card.Header>
          <Card.Body>
            
              <Form.Group>
                <Form.Label column sm="4">
                  Nome
                </Form.Label>
                <Col sm="6" >
                 <Form.Control placeholder="Escreva"/>
                </Col>
                <Button>
                  Clique aqui
                </Button>
              </Form.Group>
            
          </Card.Body>
        </Card>
      </Form>
    </div>
);
}

export default App;
