pragma solidity ^0.4.23;

contract ICORating {
  /* mapping field below is equivalent to an associative array or hash.
  */
  
  mapping (bytes32 => uint8) public ratingsReceived;
  
  /* We will use an array of bytes32 to store the list of ICO
  */
  
  bytes32[] public ICOList;

  /* This is the constructor which will be called when you
  deploy the contract to the blockchain. When we deploy the contract,
  we will pass an array of ICO for which users will give ratings
  */
  //function ICORating
  constructor(bytes32[] ICONames) public {
    ICOList = ICONames;
  }

  // This function returns the total ratings an ICO has received so far
  function totalVotesFor(bytes32 ICO) view public returns (uint8) {
    return ratingsReceived[ICO];
  }

  // This function increments the vote count for the specified ICO. Equivalent to upvoting
  function voteForICO(bytes32 ICO) public {
    ratingsReceived[ICO] += 1;
  }
}