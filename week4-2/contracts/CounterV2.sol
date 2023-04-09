// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract CounterV2 is Initializable {

    uint256 public count;
    uint256 public lastChangeBlock = 0;

    function initialize(uint256 _count) public initializer {
        count = _count;
    }

    function increaseCount(uint256 num) public {
        count += num;
        lastChangeBlock = block.number;
    }

    function decreaseCount(uint256 num) public {
        count -= num;
        lastChangeBlock = block.number;
    }
}