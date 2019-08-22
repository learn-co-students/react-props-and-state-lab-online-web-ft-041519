import React from 'react'

class Pet extends React.Component {
  render() {
    return (this.props.pets.map(pet => (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button" onClick={this.props.onAdoptPet} >Already adopted</button>
          <button className="ui primary button" onClick={this.props.onAdoptPet} >Adopt pet</button>
        </div>
      </div>
    )))
  }
}

export default Pet
