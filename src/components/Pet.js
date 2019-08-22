import React from 'react'

class Pet extends React.Component {
  render() {
    let pet = this.props.pet

    let gender
    if (pet.gender === 'female') {
      gender = '♀'
    } else {
      gender = '♂'
    }

    let adoptButton
    if (pet.isAdopted === true) {
      adoptButton = <button className="ui disabled button" >Already adopted</button>
    } else {
      adoptButton = <button className="ui primary button" onClick={ () => this.props.onAdoptPet(pet.id)} >Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {gender}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
            {adoptButton}
        </div>
      </div>
    )
  }
}

export default Pet
