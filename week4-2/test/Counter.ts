import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "ethers"

describe("Counter Test", function() {

  let counter:Contract;
  
  beforeEach(async function () {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
  })


  it("should be able to initialize", async function () {
    await counter.initialize(1);
    const count = await counter.count();
    expect(count).to.equal(1);
  })

  it("should be able to increase count", async function() {
    await counter.initialize(1);
    await counter.increaseCount(10);
    const count = await counter.count();
    expect(count).to.equal(11);
  })
});