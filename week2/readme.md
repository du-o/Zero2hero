## 部署流动性挖矿合约

### 1. 部署ERC-20合约
- DUO token 
- 合约代码：DUO.sol
- 部署地址：0x92394a75dfEDe8023298B87ED3FfB190bbC63498
- 部署transaction： https://testnet.bscscan.com/tx/0x08894f1252176e6003b5d4db9c35c846fc255de77b61d44b62a6ad62bac50ab6

### 2. 完成流动性挖矿合约的部署
#### 合约部署
- KYO Token，该token作为奖励流动性挖矿奖励token，通过LPStaking合约mint新增的KYO token
- 合约代码：KYO.sol
- 部署地址：0x119Ba654d51B3BeA203Ca8befaa5215D4DC0468F
- 部署transaction:https://testnet.bscscan.com/tx/0x53533af7d0a3f668e5ae9f06f750c56ec8675888936d62318f6ddf8e2a9a49d8

#### 流动性挖矿合约
- 合约代码：LPStaking.sol
- 部署地址：0x70eae165297E279dF57eeB4A38187203764Df3f2
- 部署transaction：https://testnet.bscscan.com/tx/0xeffcdbc90f54cfb90fc69371f2eab9ef9b052d375f3a5a50c9b748f3f3b9cb3d
- 注：部署时需填写奖励开始计算区块高度、每区块奖励、结束奖励区块高度

#### 该合约包含了以下功能：
- 添加池子：每个池子包含一个 LP Token 和分配给该池子的 allocPoint（权重）。
- 设置池子：更改池子的 allocPoint。
- 存款：将 LP Token 存入池子，获得对应的代币奖励。存款时将会自动计算之前未领取的奖励并发送给用户。
- 提款：从池子中提取 LP Token，并领取对应的代币奖励。提款时将会自动计算之前未领取的奖励并发送给用户。
- 紧急提款：从池子中提取 LP Token，但不会领取奖励。这个功能应该只在必要时使用

#### 部署成功后，对池子初始化
- 调用 KYO Token 合约的 Add Minter 方法添加 minter 地址
- 调用 LPStaking 合约的 Add Pool 方法添加一个流动性挖矿的Pool，Pool 支持的质押 LP token 为 DUO Token ，并设置 Pool 的权重为 100
- 调用 DUO Token 的 Approve 方法，授权 LPStaking 合约使用 100个 DUO token
- 调用 LPStaking 合约的 Deposit 方法，往刚刚添加的 Pool 质押100个 DUO token，pid为精度可填0
- 调用 LPStaking 合约的 Deposit 方法，并传入参数质押 0个 DUO token，提取流动性挖矿奖励，获得KYO token
