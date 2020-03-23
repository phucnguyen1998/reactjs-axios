import React, { Component } from 'react';

class ListCountry extends Component {

    render() {
        return (
            <option value={this.props.id}>{this.props.country}</option>
        );
    }
}

export default ListCountry;