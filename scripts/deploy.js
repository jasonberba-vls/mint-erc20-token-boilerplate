// ***
// --network : mainnet / sepolia
// Command to execute script : 'npx hardhat run scripts/deploy.js --network sepolia'

async function main() {
    //Initialize Solidity Contract Object
    const contractName = "MintErc20TokenContract";
    const contract = await ethers.getContractFactory(contractName);

    //Execute Token Minting
    //Token Name : Test6USDT
    //Token Code : T6USDT
    //Decimal Precision : 6
    //Token Amount : 10,000
    const contractDeployResult = await contract.deploy('Test6USDT', 'T6USDT', 6, 10000);
    console.log(`Contract ${contractName} Deployed to Address:`, contractDeployResult.address);

    //Sample created ERC20 Token in Seplia Network: 0x9f0c99e8B28d9cf19Ba94f9C60ba30032501b8E4
  }
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });