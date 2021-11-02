import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Td = styled.td`
    font-size: 2rem;
    border-radius: 2px;
    border: 1px solid rgb(130, 190, 230);
    color: rgb(130, 190, 230);
    margin: 0 1em;
    padding: 1.5rem 0 1.5rem 2rem;
    width: 30vh;
`;

export default class Coin extends Component {
    
    handleClick = (event) => {
        // Prevent default action of submitting form
        event.preventDefault();

        this.props.handleRefresh(this.props.ticker);
    }

    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>$ {this.props.price}</Td>
                {this.props.showBalance ? <Td>{this.props.balance}</Td> : null}
                <Td>
                    <form action="#" method="POST">
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </Td>
            </tr>  
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}
