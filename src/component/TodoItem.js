import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem, Button, Row, Col } from 'reactstrap'

class TodoItem extends React.Component {
  itemTitle () {
    return (<strong>{this.props.index}.{this.props.title}</strong>)
  }
  render () {
    return (
      <ListGroupItem className={this.props.status}>
        <Row>
          <Col xs='12' sm='7' md='8'>
            {this.itemTitle()}
          </Col>
          <Col xs='12' sm='5' md='4' className='action-group'>
            {this.props.status !== 'done' ? <Button color='success' size='sm' onClick={() => this.props.checked(this.props.id)}>Done</Button> : null }
            {this.props.status !== 'done' ? <Button color='secondary' onClick={() => this.props.edit(this.props.id)} size='sm'>Edit</Button> : null}
            <Button color='danger' size='sm' onClick={() => this.props.remove(this.props.id)}>Remove</Button>
          </Col>
        </Row>
      </ListGroupItem>
    )
  }
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  checked: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}
export default TodoItem
