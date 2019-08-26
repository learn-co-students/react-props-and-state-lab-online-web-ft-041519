import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  showPets = () => {
    return this.props.pets.map(pet => {
      return <Pet 
              id={pet.id}
              name={pet.name} 
              type={pet.type} 
              age={pet.age} 
              weight={pet.weight}
              gender={pet.gender}
              isAdopted={pet.isAdopted}
              onAdoptPet={this.props.onAdoptPet}
              />
    })
  }


  render() {
    return <div className="ui cards">
            {this.showPets()}
          </div>
  }
}

export default PetBrowser
