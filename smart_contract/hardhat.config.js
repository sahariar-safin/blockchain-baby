// https://eth-ropsten.alchemyapi.io/v2/wIBP2vwfw0ujGPTKeCi6GpWsJgS3oJFF

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/wIBP2vwfw0ujGPTKeCi6GpWsJgS3oJFF",
      accounts: ["48d73d11ff8bae14b57780f63f3325b936368cb92593e5fd7478132beaa8149a"]
    }
  }
}