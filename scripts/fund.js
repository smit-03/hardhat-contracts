const { ethers, getNamedAccounts } = require("hardhat");
const fs = require("fs");

async function main() {
    const { deployer } = await getNamedAccounts();
    const fundMe = await ethers.getContract("FundMe", deployer);
    console.log("Funding Contract...");
    const txnResponse = await fundMe.fund({
        value: ethers.utils.parseEther("0.1"),
    });
    await txnResponse.wait(1);
    console.log("Funded!");
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
