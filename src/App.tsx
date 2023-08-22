// App.tsx
import React from 'react';
import './App.css';
import fallacies from './fallacies';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="mt-5 mb-auto">
        <h1 className="text-center mb-4 text-primary">AGI Fallacies</h1>
        <p className="text-center mb-5">
          Artificial General Intelligence (AGI) represents a significant leap in
          the field of artificial intelligence. However, discussions about its
          potential risks often encounter various misconceptions. This page
          highlights some of these misconceptions and should serve to enhance
          the quality of the debate.
        </p>
        <Row>
          {fallacies.map((fallacy, index) => (
            <Col md={4} key={index} className="mb-4 d-flex align-items-stretch">
              <Card className="h-100 shadow-lg border-0 w-100">
                <Card.Header className="text-primary">
                  <Card.Title className="m-0">
                    {fallacy.icon} {fallacy.name}
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <p>
                    <strong>Description:</strong> {fallacy.description}
                  </p>
                  <p>
                    <strong>Counter:</strong> {fallacy.counter}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
