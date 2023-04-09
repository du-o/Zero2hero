import { DeployFunction, ProxyOptions } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log("Deploying My Contract with account:", deployer);

  const proxyOptions: ProxyOptions = {
    proxyContract: "TransparentUpgradeableProxy",
    viaAdminContract: "ProxyAdmin",
    execute: {
      // 只在初始化时执行
      init: {
        // 执行initialize方法
        methodName: "initialize",
        // 参数
        args: [1],
      },
    },
  };

  const Counter = await deploy("Counter", {
    contract: "Counter",
    from: deployer,
    proxy: proxyOptions,
    args: [],
    log: true,
  });

  console.log("Proxy deployed to:", Counter.address);
  console.log("Implementation deployed to:", Counter.implementation);

};

// npx hardhat deploy --network {network} --tags {Tag}
func.tags = ["Counter"];
export default func;