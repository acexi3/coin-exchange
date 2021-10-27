import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
        <h1 className="App-title">
          Coin Exchange
        </h1>
      </header>
      <AccountBalance amount={10000} />
      <table className="coin-table">
      <thead>  
        <tr>        
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <Coin name="Bitcoin" ticker="BTC" price={61000.00} /> 
        <Coin name="Ethereum" ticker="ETH" price={4200.00} />
        <Coin name="T00bcoin" ticker="TOOB" price={13999.99} />
        <Coin name="Harmony" ticker="ONE" price={4.00} />
        <Coin name="Cardano" ticker="ADA" price={13.99} />
        <Coin name="Ripple" ticker="XRP" price={.42} />
        <Coin name="Solana" ticker="SOL" price={3999.99} />
        <Coin name="Binance" ticker="BNB" price={900.00} />
        <Coin name="Terra" ticker="LUNA" price={55.21} />
      </tbody>
    </table>
    </div>
  );
}

export default App;
