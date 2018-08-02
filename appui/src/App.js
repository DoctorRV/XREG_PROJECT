
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ratingContract } from "./EthereumSetup";
import {ShowICO } from "./ShowICO";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      ICOs : [{name:'Selfllery',rating:0},{name:'Nagacoin',rating:0},{name:'Filecoin',rating:0}]
    }
    this.handleVoting=this.handleVoting.bind(this)
  }

handleVoting(ICO){
    ratingContract.voteForICO(ICO)
    let votes=ratingContract.totalVotesFor(ICO).toNumber()
    this.setState({ICOs:this.state.ICOs.map(
      (el)=>el.name===ICO? Object.assign({},el,{rating:votes}):el
    
    )});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to XRegulation Platform</h1>
        </header>
        <p className="App-intro">
          XRegulation platform is a one of its kind platform which allows general public to gain insights on the legitimacy of various ICOs that you come across.The platform utilizes a unique Proof of Validation (PoV) algorithm to determine the legitimacy of the Initial Coin Offerings, thereby giving the investors a first hand insight on the future prospects of the projects launched by the ICO owners.
        </p>
        <div className="ICO-table">
          <ShowICO ICOs={this.state.ICOs} vote={this.handleVoting}/>
        </div>
      </div>
    );
  }
}

export default App;