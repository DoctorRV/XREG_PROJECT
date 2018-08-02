import Web3 from 'web3';

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
let ratingABI=[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ratingsReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ICOList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"ICONames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"ICO","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ICO","type":"bytes32"}],"name":"voteForICO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
let ratingAddress='0x248b709b298ef92510e67b0133678bbe19b1983f';
web3.eth.defaultAccount = web3.eth.accounts[0]


const ratingContract=web3.eth.contract(ratingABI).at(ratingAddress);
export {ratingContract};