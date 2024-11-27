
// ***
// Command to compile Contract : 'npx hardat compile'

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

//Contract Name to be used for Deployment Script : 'MintErc20TokenContract'

contract MintErc20TokenContract is ERC20 {

    uint8 private _decimals;

    // Constructor values to be used for Token Creation
    // name = Token Name
    // symbol = Token Code
    // decimals = Token Decimal Precision Count
    // tokenCount = Amount of Token to be Created
    constructor(string memory name, string memory symbol, uint8 decimal, uint256 tokenCount) 
    
    ERC20(name, symbol) {
        //Assign defined decimal precision
        _decimals = decimal; 

        //Mint Token
        _mint(msg.sender, tokenCount * (10 ** uint256(decimals())));
    }

    // Override decimals() to return the specified value for Precision Count
    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
}