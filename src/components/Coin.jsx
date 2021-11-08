import React from 'react';
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

export default function Coin(props) {
    
    const handleClick = (event) => {
        // Prevent default action of submitting form
        event.preventDefault();

        props.handleRefresh(props.tickerId);
    }

    return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <Td>$ {props.price}</Td>
            {props.showBalance ? <Td>{props.balance}</Td> : null}
            <Td>
                <form action="#" method="POST">
                    <button onClick={handleClick}>Refresh</button>
                </form>
            </Td>
        </tr>  
    );
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}
