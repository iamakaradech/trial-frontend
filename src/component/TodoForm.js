import React from 'react'
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap'
class TodoForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { title: '', dirty: false }
  }

  static getDerivedStateFromProps (props, state) {
    if (!state.dirty && props.editItem) {
      return { title: props.editItem.title }
    }

    return null
  }
  addTodo () {
    if (this.state.title === '') return
    if (this.props.editItem) {
      this.props.add(this.state.title, this.props.editItem.id)
    } else {
      this.props.add(this.state.title)
    }
    this.setState({ title: '', dirty: false })
  }

  handleKeyUp (event) {
    if (event.keyCode === 13) {
      this.addTodo()
    }
  }

  handleAddTodo () {
    this.addTodo()
  }
  render () {
    return (
      <div>
        <InputGroup>
          <Input onKeyUp={this.handleKeyUp.bind(this)} value={this.state.title} onChange={(e) => {
            e.persist()
            this.setState({ title: e.target.value, dirty: true })
          }} size='lg' />
          <InputGroupAddon addonType='append'>
            <Button onClick={this.handleAddTodo.bind(this)}>Add</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    )
  }
}

export default TodoForm
