// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract Freedom is ERC20 {

    uint public MaxTotalSupply = 100000000000 ether;//Erc20 最大供应量 1000亿


    mapping (address => bool) public isClaim; //可自动领取，每个地址只可以领取一次

    //初始化代币
    constructor () ERC20("Freedom Token","FDM"){
        _mint(msg.sender,5000 ether);
    }
    //可以
    function claim() external {
        require(!isClaim[msg.sender], 'is claim error');
        _mint(msg.sender,5000 ether);
        isClaim[msg.sender] = true;
    }
}
