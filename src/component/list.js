import React, { Component } from 'react';

class List extends Component {

    render() {
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.country}</td>
                <td>{this.props.cases}</td>
                <td>{this.props.todayCases}</td>
                <td>{this.props.deaths}</td>
                <td>{this.props.todayDeaths}</td>
                <td>{this.props.recovered}</td>
                <td>{this.props.critical}</td>         
            </tr>
        );
    }
}

export default List;