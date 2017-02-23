import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Wings extends Component {
  render () {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}

    return <div>
      <h1 className='heads1'>Wings and BBQ</h1>
      <main>
        <div className='well' style={wellStyles}>
          <Button bsSize='large' href='http://luckiebs.com' block>Lucky B's</Button>
          <Button bsSize='large' href='https://millersalehouse.com/locations/st-pete/' block>Ale House</Button>
        </div>
      </main>
    </div>
  }
}
