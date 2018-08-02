var ICORatings = artifacts.require("./ICORating.sol");

module.exports = function(deployer) {
  deployer.deploy(ICORatings,['Selfllery', 'Nagacoin', 'Filecoin'], {gas: 6700000});
};