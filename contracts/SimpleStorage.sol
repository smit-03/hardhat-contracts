// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    // it's similar to class
    // boolean , uint, int, address, bytes
    // bool hasFavoriteNumber = true;
    // string favoriteNumberInText="Five";
    // int256 favoriteInt = -5;
    // address myAddress = 0x234d9fC1BdF6FFb0C0CBc19992C287da50390B9B;
    // bytes32 favoriteBytes="cat";
    // uint256 favoriteNumber = 5;

    uint256 private favNum; // This gets initialized to 0

    struct People {
        uint256 favNum;
        string name;
    }

    // uint256[] public favNumList;
    People[] public people;

    mapping(string => uint256) public nameToFavNum;

    function store(uint256 _favNum) public virtual {
        favNum = _favNum;
    }

    // view , pure
    function retrieve() public view returns (uint256) {
        return favNum;
    }

    /* 
        type     permanent    modifiable

        calldata    no           no              
        memory      no           yes
        storage     yes          yes   // function argument can't be of type storage.

        types are only given to array, structures and mappings (string also, sice string is array of char).
    */
    function addPerson(string memory _name, uint256 _favNum) public {
        people.push(People(_favNum, _name));
        nameToFavNum[_name] = _favNum;
    }
}

// deploy : yarn hardhat run scripts/deploySimpleStorage.js
