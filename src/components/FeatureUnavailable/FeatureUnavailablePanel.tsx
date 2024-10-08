import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FeatureUnavailablePanel = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: '#f5f5f5', height: '100vh', width: '100%', padding: '32px' }}
      className='mx-auto'
    >
      <Container
        fluid
        style={{ backgroundColor: 'white', height: 'auto', width: 'auto', borderRadius: '20px' }}
        className='px-0'
      >
        <Row className='align-items-center'>
          <Col className='text-center'>
            <img
              src={require('../../assets/images/sadEmoji.png')}
              alt=''
              style={{ width: '70%', height: 'auto' }}
            />
          </Col>
          <Col className='justify-content-md-center' style={{ paddingLeft: '0px' }}>
            <div>
              <h1>404</h1>
              <h2>UH OH! This feature is currently not available.</h2>
              <p>
                The page you are looking for does not exist. How you got here is a mystery. But you can
                click the button below to go back to the homepage.
              </p>
              <Link to='/overview'>
                <Button>HOME</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default FeatureUnavailablePanel
