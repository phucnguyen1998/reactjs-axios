import React, { Component } from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import List from './list';

class ListCase extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dataCase: [],
        }
    }
    async componentWillMount() {
        await axios.get("https://corona.lmao.ninja/countries/" + this.props.country).then(((response, error)=>{
            if(!error && response.data && response.status === 200){
                let arrayData = [];
                let data = response.data;
                arrayData.push(
                    data
                )
                
                //console.log(data)
                this.setState({ dataCase: arrayData })
            }
            else{
                console.log(error)
            }}
        )
        ).catch(function(error){
            console.log(error)
        })
         
    }

    getData = () => {
        return this.state.dataCase.map((value,index) => {
            return (<List 
                key={index} 
                id={index} 
                country={value.country} 
                cases={value.cases} 
                todayCases={value.todayCases} 
                deaths={value.deaths} 
                todayDeaths={value.todayDeaths} 
                recovered={value.recovered}  
                critical={value.critical}
            />)
        });
    }
        

    render() {
        return (
            <table className="table mt-3">
                <thead>
                    <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Quốc gia</th>
                    <th scope="col">Tổng số ca Nhiễm</th>
                    <th scope="col">Số ca nhiễm hôm nay</th>
                    <th scope="col">Tử vong</th>
                    <th scope="col">Số ca tử vong hôm nay</th>
                    <th scope="col">Điều trị thành công</th>
                    <th scope="col">Nguy kịch</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {this.getData()}
                </tbody>
            </table>


        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        country: state.country
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch({})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCase)