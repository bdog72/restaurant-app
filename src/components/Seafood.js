import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class Seafood extends Component {
  render () {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}

    return <div>
      <h1>Seafood</h1>
      <main>
        <div className='well' style={wellStyles}>
          <Button bsSize='large' href='http://www.casualclam.com' block>Casual Clam</Button>
          <Button bsSize='large' href='https://www.bonefishgrill.com' block>BoneFish Grill</Button>
        </div>
      </main>
    </div>
  }
}
