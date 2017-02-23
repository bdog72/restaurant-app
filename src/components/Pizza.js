import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Pizza extends Component {
  render () {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}

    return <div>
      <h1>Pizza</h1>
      <main>
        <div className='well' style={wellStyles}>
          <Button bsSize='large' href='https://tobysoriginallittleitalypizza.com/' block>Little Italy</Button>
          <Button bsSize='large' href='http://laitaliamia.com/' block>Italia Mia</Button>
          <Button bsSize='large' href='http://paisanospnp.com/' block>Paisanos</Button>
          <Button bsSize='large' href='http://www.28gramspizza.com/' block>28 Grams</Button>
        </div>
      </main>
    </div>
  }
}
