import { task } from "hardhat/config";

task("increaseCount", "interact with Counter to increaseCount")
.addParam("proxy")
.setAction(async (_, hre) => {
    const Counter = await hre.ethers.getContractAt("Counter", _.proxy);

    console.log("Current count is: ", await Counter.count());

    console.log("Call increaseCount(10): ", await Counter.increaseCount(10));
});

task("decreaseCount", "interact with Counter to decreaseCount")
.addParam("proxy")
.setAction(async (_, hre) => {
    const Counter = await hre.ethers.getContractAt("Counter", _.proxy);

    console.log("Current count is: ", await Counter.count());
    console.log("lastChangeBlock is: ", await Counter.lastChangeBlock());

    console.log("Call decreaseCount(5): ", await Counter.decreaseCount(5));
});