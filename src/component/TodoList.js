import React from 'react'
import { ListGroup } from 'reactstrap'
import uuid from 'uuid'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import _ from 'lodash'

class TodoList extends React.Component {
  constructor () {
    super()
    this.state = {
      todo: [
        {
          id: uuid.v4(),
          title: 'watching movie',
          status: 'pending'
        },
        {
          id: uuid.v4(),
          title: 'watching movie again',
          status: 'done'
        },
        {
          id: uuid.v4(),
          title: 'watching movie again and again',
          status: 'pending'
        }
      ],
      editItem: null
    }
  }
  addOrEdit (title, id) {
    let items = this.state.todo
    if (id) {
      let index = _.findIndex(this.state.todo, (item) => item.id === id)
      items[index].title = title
    } else {
      items.push({
        id: uuid.v4(),
        title: title,
        status: 'pending'
      })
    }
    this.setState({ todo: [ ...items ], editItem: null })
  }

  checked (id) {
    let items = this.state.todo
    let index = _.findIndex(this.state.todo, (item) => item.id === id)
    items[index].status = 'done'
    this.setState({ todo: [ ...items ] })
  }

  edit (id) {
    let items = this.state.todo
    let index = _.findIndex(this.state.todo, (item) => item.id === id)
    this.setState({ editItem: items[index] })
  }

  remove (id) {
    let items = this.state.todo
    let index = _.findIndex(this.state.todo, (item) => item.id === id)
    items.splice(index, 1)
    this.setState({ todo: [ ...items ] })
  }
  render () {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoForm add={(title, id = null) => this.addOrEdit(title, id)} editItem={this.state.editItem} />
        <hr />
        <ListGroup>
          {this.state.todo.map((item, index) => {
            return (<TodoItem key={item.id} index={index + 1} id={item.id} checked={(id) => this.checked(id)} remove={(id) => this.remove(id)} edit={(id) => this.edit(id)} title={item.title} status={item.status} />)
          })}
        </ListGroup>
      </div>
    )
  }
}

export default TodoList
