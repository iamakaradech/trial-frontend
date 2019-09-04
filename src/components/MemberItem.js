import React from 'react'
import PropTypes from 'prop-types'

class MemberItem extends React.Component {
  capitalize (text) {
    return `${text.charAt(0).toUpperCase()}${text.substr(1).toLowerCase()}`
  }
  render () {
    return (
      <p>{this.capitalize(this.props.name)} want to buy {this.props.cars.join(', ')}</p>
    )
  }
}

MemberItem.propTypes = {
  name: PropTypes.string,
  cars: PropTypes.array
}

export default MemberItem
