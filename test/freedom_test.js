const Freedom = artifacts.require("Freedom");
// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.

describe("Freedom contract", function() {
    let accounts;
    before(async function() {
        //通过web3js获取
        accounts = await web3.eth.getAccounts();
    });
    describe("Deployment", function() {
        it("Should deploy with the right Freedom", async function() {
            const freedom = await Freedom.new();
            //测试部署合约地址
            console.log("合约地址："+freedom.address);
            //获取token名称
            console.log("合约代码："+await freedom.symbol());
            //账户一余额
            let balance = await freedom.balanceOf(accounts[0]);
            console.log("账户1："+accounts[0]+"余额1："+balance);
            //账户二余额
            let balance1 = await freedom.balanceOf(accounts[1]);
            console.log("账户2："+accounts[1]+"余额2："+balance1);
        });
    });
    describe("transfer",function (){
        it("Should transfer",async function(){
            const freedom = await Freedom.new();
            let amount = web3.utils.toWei("100", "ether");
            await freedom.transfer(accounts[1],amount);
            let balance1 = await freedom.balanceOf(accounts[1]);
            //assert.equal(balance1, 10000, "token balance is 10000");
            console.log("账户2："+accounts[1]+"余额2："+balance1);
        })
    })
});

