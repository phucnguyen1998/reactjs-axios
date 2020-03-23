import React, { Component } from 'react';
import ListCountry from './listCountry';
import axios from "axios";
class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dataCountry: [],
        }
    }

    async componentWillMount() {
        await axios.get("https://corona.lmao.ninja/countries/").then(((response, error)=>{
            if(!error && response.data && response.status === 200){
                let arrayData = [];
                let data = response.data;
                arrayData.push(
                    data
                )
                
                //console.log(data)
                this.setState({ dataCountry: arrayData })
            }
            else{
                console.log(error)
            }}
        )
        ).catch(function(error){
            console.log(error)
        })  
    }

    getDataCountry = () => {
        return this.state.dataCountry.map((value,index) => {
            let country = value[index]
            return (<ListCountry
                key={index}
                id={index} 
                country={country.country} 
            />)
        });
    }

    render() {
        return (
            <select className="browser-default custom-select custom-select-lg mb-3">
                <option defaultValue>Cac quoc gia co nguoi nhiem benh</option>
                {this.getDataCountry()}
            </select>
        );
    }
}

export default Country;