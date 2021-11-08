import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
    background: transparent;
    font-size: 4rem;
    border-radius: 4px;
    border: 1px solid rgb(130, 190, 230);
    color: rgb(130, 190, 230);
    margin: 0 1em;
    padding: 1.5rem 0 1.5rem 2rem;
`;

export default function AccountBalance(props) {
    
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if ( props.showBalance ) {
        content = <>Balance: ${props.amount}</>;
    }
    return (
        <Section>
            {content} 
            <button onClick={props.handleBalanceVisibilityChange}> {buttonText}</button>
        </Section>
    );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}