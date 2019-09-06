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
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let url

    if (this.state.filters.type !== "all"){
      url = `/api/pets?type=${this.state.filters.type}`
    } else {
      url = '/api/pets'
    }
    fetch(url)
    .then(resp => resp.json())
    .then(pets => {
      this.setState({pets})
    })
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(p => {
      return p.id === id ? {...p, isAdopted: true} : p
    })
    this.setState({pets})
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
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
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

//App should pass a callback prop, onChangeType, to <Filters />
//This callback needs to update <App />'s state.filters.type

//Pass callback prop onFindPetsClick to <Filters />
//When the <Filters /> component calls onFindPetsClick, <App /> should fetch a list of pets using fetch()

//set <App/>'s state.pets with the results of your fetch request so you can pass the pet data down as props to <PetBrowser />
