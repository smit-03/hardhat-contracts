const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", function () {
    let SimpleStorageFactory, simpleStorage;
    beforeEach(async function () {
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await SimpleStorageFactory.deploy();
    });

    it("Should start with a favorite number of 0", async function () {
        const curVal = await simpleStorage.retrieve();
        const expVal = "0";
        assert.equal(curVal.toString(), expVal);
        // expect(currentValue.toString()).to.equal(expectedValue)
    });
    it("Should update when we call store", async function () {
        const expectedValue = "7";
        const transactionResponse = await simpleStorage.store(expectedValue);
        await transactionResponse.wait(1);

        const currentValue = await simpleStorage.retrieve();
        assert.equal(currentValue.toString(), expectedValue);
    });
});
