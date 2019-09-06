import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petDetails = this.props.pets.map(pet => {
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>
      })
    
    return <div className="ui cards">{petDetails}</div>
  }
}

export default PetBrowser


//Should receive a pets prop. This is an array of pets that the component uses to render <Pet /> components.

//App should determine which pets to pass down as props.
//App should be responsible for filtering this list based on the types of pets the user wants to see.

//Should receive an onAdoptPet prop. This callback prop gets passed to its
//<Pet /> children components.

//pass pet prop to Pet with isAdopted and onAdoptPet
