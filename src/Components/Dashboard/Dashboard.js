import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }

        this.allHouses = this.allHouses.bind(this)
    }

    allHouses(req, res){
        axios.get('/api/allHouses')
        .then(res => {
            this.setState({
                houses:res.data
            })
        }).catch(error => console.log(error))
    }

    addHoues(req, res){
        axios.post('/api/allHouses')
        .then()
    }

    render() {
        let list = this.state.houses.map((house,i)=>{
          return ( <House key={i} name={house.name} address={house.address} city={house.city}
            state={house.state} zip={house.zip} id={house.id} delete={this.deleteHouse}
            img={house.img} mortgage={house.mortgage} rent={house.rent}/>)
        })
        return(
            <div>Dashboard
                {list}
                <button> <Link to='/wizard'>Add New Property</Link></button>
            <House/>
            </div>
        )
    }
}

export default Dashboard

