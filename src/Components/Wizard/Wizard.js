import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: null
        }

        this.handleNameInput = this.handleNameInput.bind(this)
        this.handleAddressInput = this.handleAddressInput.bind(this)
        this.handleCityInput = this.handleCityInput.bind(this)
        this.handleStateInput = this.handleStateInput.bind(this)
        this.handleZipcodeInput = this.handleZipcodeInput.bind(this)
        this.inputReturn = this.inputReturn.bind(this)
        
    }

    handleNameInput(e) {
        this.setState({ name: e.target.value});
    }

    handleAddressInput(e) {
        this.setState({ address: e.target.value});
      }
    
    handleCityInput(e) {
        this.setState({ city: e.target.value});
      }
    
    handleStateInput(e) {
        this.setState({ state: e.target.value});
      }

    handleZipcodeInput(e) {
        this.setState({ zipcode: e.target.value});
      }

    inputReturn() {
        console.log(`the property name is ${this.state.name} located at ${this.state.address} in ${this.state.city}, ${this.state.state} ${this.state.zipcode}`)
    }

    render(){
        const {name, address, city, state, zipcode} = this.state
        return(
            <div>Wizard
                <button><Link to='/'>Cancel</Link></button>
                <input
                    type="text"
                    placeholder="Property Name"
                    onChange={this.handleNameInput}
                    value={name}/>
                <input
                    type="text"
                    placeholder="Address"
                    onChange={this.handleAddressInput}
                    value={address}/>
                <input
                    type="text"
                    placeholder="City"
                    onChange={this.handleCityInput}
                    value={city}/>
                <input
                    type="text"
                    placeholder="State"
                    onChange={this.handleStateInput}
                    value={state}/>
                <input
                    type="text"
                    placeholder="Zipcode"
                    onChange={this.handleZipcodeInput}
                    value={zipcode}/>
                <button onClick={this.inputReturn}>Submit</button>
            </div>
        )
    }
}

export default Wizard