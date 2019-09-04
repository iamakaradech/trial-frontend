import React from 'react'
import axios from 'axios'
import MemberItem from './MemberItem'

export default class MemberList extends React.Component {
  constructor () {
    super()
    this.state = { members: [] }
  }

  componentDidMount () {
    axios.get('./members.json').then((response) => {
      this.setState({ members: response.data })
    })
  }

  listMember () {
    return (
      <>
        {
          this.state.members.map((member, index) => {
            return <MemberItem
              key={`${member.name}-${index}`}
              name={member.name}
              cars={member.cars} />
          })
        }
      </>
    )
  }

  render () {
    return (
      <div>
        {this.listMember()}
      </div>
    )
  }
}
