import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    event.preventDefault()
    let type = event.target.value
    this.setState(
      type: type
    )
  }
  
  onFindPetsClick = () => {
    let url

    switch(this.state.filters.type){
      case 'cat':
        url = '/api/pets?type=cat'
        break
      case 'dog':
        url = '/api/pets?type=dog'
        break
      case 'micropig':
        url = '/api/pets?type=micropig'
        break
      default:
        url = '/api/pets'
        break
    }

    fetch(url)
    .then(response => response.json())
    .then(pets => {
      this.setState(
        pets: pets
      )
      console.log(pets)
    })
  }

  onAdoptPet = (petID) => {
    const pets = this.state.pets.map(pet => {
      if (pet.id === petID) {
        return {...pet, isAdopted: true}
      }
    })
    this.setState({ pets })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={ this.onChangeType } onFindPetsClick= { this.onFindPetsClick } />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
