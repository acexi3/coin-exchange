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

  constructor(props) {
    super(props); 
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 61000
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 4200
        },
        {
          name: 'T00bCoin',
          ticker: 'TOOB',
          price: 13999
        },
        {
          name: 'Harmony',
          ticker: 'ONE',
          price: 4
        },
        {
          name: 'Cardano',
          ticker: 'ADA',
          price: 12.99
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: .42
        },
        {
          name: 'Solana',
          ticker: 'SOL',
          price: 3999.24
        },
        {
          name: 'Binance',
          ticker: 'BNB',
          price: 1200
        },
        {
          name: 'Terra',
          ticker: 'LUNA',
          price: 72.21
        },
        {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          price: 1872
        },
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map( function( {ticker,name, price} ) {
      let newPrice = price;  
      if ( valueChangeTicker === ticker ) { 
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
        }
      return {
        ticker,
        name,
        price: newPrice
      }
    });

    this.setState({ coinData: newCoinData });
  }

  render() {
    return (
      <Div className="App">
        <PageHeader />   
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </Div>
    );
  } 
}

export default App;
