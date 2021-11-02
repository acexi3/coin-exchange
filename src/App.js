import React from 'react'; 
import styled from 'styled-components';
import PageHeader from './components/PageHeader';
import CoinList from './components/CoinList';
import AccountBalance from './components/AccountBalance';

const Div = styled.div`
  text-align: center;
  background-color: rgb(0, 0, 0);
  color: #cccccc;
`;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 61000
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 23.5,
        price: 4200
      },
      {
        name: 'T00bCoin',
        ticker: 'TOOB',
        balance: 1000,
        price: 13999
      },
      {
        name: 'Harmony',
        ticker: 'ONE',
        balance: 0,
        price: 4
      },
      {
        name: 'Cardano',
        ticker: 'ADA',
        balance: 3300,
        price: 12.99
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 0,
        price: .42
      },
      {
        name: 'Solana',
        ticker: 'SOL',
        balance: 10.5,
        price: 3999.24
      },
      {
        name: 'Binance',
        ticker: 'BNB',
        balance: 0,
        price: 1200
      },
      {
        name: 'Terra',
        ticker: 'LUNA',
        balance: 43,
        price: 72.21
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 0,
        price: 1872
      },
    ]
  }
  handleBalanceVisibilityChange = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }
  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( function( values ) {
      let newValues = { ...values };  
      if ( valueChangeTicker === values.ticker ) { 
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
        }
      return newValues;
    });

    this.setState({ coinData: newCoinData });
  }

  render() {
    return (
      <Div className="App">
        <PageHeader />   
        <AccountBalance 
          amount={this.state.balance} 
          showBalance={this.state.showBalance} 
          handleBalanceVisibilityChange={this.handleBalanceVisibilityChange} />
        <CoinList 
          coinData={this.state.coinData} 
          showBalance={this.state.showBalance}
          handleRefresh={this.handleRefresh} />
      </Div>
    );
  } 
}

export default App;
