import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
// import { Button, Row, Col, Icon, Table } from 'react-materialize'
export default class Seafood extends Component {
  render () {
    return <div>
      <h1 className='heads1'>Seafood</h1>
      <main>
        <ListGroup bsClass='lists'>
          <ListGroupItem header='Casual Clam' href='http://www.casualclam.com' />
          <ListGroupItem header='BoneFish Grill' href='https://www.bonefishgrill.com/' />
        </ListGroup>
      </main>
    </div>
  }
}
