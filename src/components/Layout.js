
import React, {Component} from 'react'
import { PageHeader } from 'react-bootstrap'
import Thumbnails from './Thumbnails'
import { LinkContainer } from 'react-router-bootstrap'
export default class Layout extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div>
      <LinkContainer to='/'>
        <PageHeader bsClass='head'>
          <p>Food-Dot-Com</p>
        </PageHeader>
      </LinkContainer>
      <Thumbnails />
      <main>
        {this.props.children}
      </main>
    </div>
  }
}
