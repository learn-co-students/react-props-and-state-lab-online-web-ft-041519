import React from 'react'

class Pet extends React.Component {

  pet_gender = () => {
    if (this.props.pet.gender === 'male') {
      return '♂' 
    } 
    else {
      return '♀'
    }
  }

  adopt_button = () => {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button" >Already adopted</button>
    } 
    else {
      return <button className="ui primary button" onClick={() => {this.props.onAdoptPet(this.props.pet.id)}} >Adopt pet</button>
    }
  }

  render() {
    // console.log('props in pet component' ,this.props)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            PET NAME: {this.props.pet.name} 
          </a>
          <div className="meta">
            <span className="date">PET TYPE: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Gender: {this.pet_gender()}</p>
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adopt_button()}
        </div>
      </div>
    )
  }
}

export default Pet
