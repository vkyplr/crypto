const Web3 = require('web3');

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');


// Meta Mask Phrase: color dog genius prize develop outside journey size dress height snap scheme
// Meta Mask Private Key: 70bb1545f9c6a44b626356bd6358e0c83c00a4dd5b04481374cc394658564ea3
// Meta Mask Account Address : 0xbc3c59fa255312b91d23ce6186c55d0e265c5604

// Tutorial Link: https://codeforgeek.com/how-to-send-ethereum-with-node-and-web3/

// Contract Address : 0x4ac23C4420dD48639cc3aa20d991098071e56b3D



const from = '0xbc3c59fa255312b91d23ce6186c55d0e265c5604'//: Test Account From
const to = '0xFC9eEB756cFa66574Bd9035B30Cd46B05E91a93c' //: Test Account To

web3.eth.getBalance(to).then(console.log)

async function transact() {
    res = await new Promise((resolve, reject) => {
        web3.eth.sendTransaction({
            from,
            to,
            value: '100000000'
        }, function(err, transactionHash) {
            if (err) {
                reject(err);
            } else {
                resolve(transactionHash);
           }
        });
    });
    
    console.log(res);
}
