import React, { Component } from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'
export default class EverythingElse extends Component {

  render () {
    // const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}

    return <div>
      <h1>Everything Else</h1>
      <main>
        {/* <div className='well' style={wellStyles}>
          <Button bsSize='large' href='https://www.bjsrestaurants.com' block>Bj's Restaurant</Button>
          <Button bsSize='large' href='http://pollotropical.com/home-page' block>Pollo Tropical</Button>
          <Button bsSize='large' href='https://www.glorydaysgrill.com' block>Glory Days</Button>
          <Button bsSize='large' href='http://cheddars.com' block>Cheddars</Button>
          <Button bsSize='large' href='https://www.peiwei.com' block>Pei Wei</Button>
        </div> */}
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Button bsSize='large' href='https://www.bjsrestaurants.com' block>Bj's</Button>
              <Button bsSize='large' href='http://pollotropical.com/home-page' block>Pollo T</Button>
              <Button bsSize='large' href='https://www.glorydaysgrill.com' block>Glory Days</Button>
            </Col>
            <Col xs={6} md={4}>
              <Button bsSize='large' href='http://cheddars.com' block>Cheddars</Button>
              <Button bsSize='large' href='https://www.peiwei.com' block>Pei Wei</Button>
            </Col>
          </Row>
        </Grid>
      </main>
    </div>
  }
}
