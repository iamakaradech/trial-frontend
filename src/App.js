import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './component/TodoList'
import { Container, Row, Col } from 'reactstrap'
import './App.css'

function App() {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm='12' md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
          <div className="App">
            <TodoList />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
