require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food report rival misery under install clog tackle genius'; 
let testAccounts = [
"0xd32bec7f7031ecee05ef852d214cb348d027abe3ad14389e94a833abcb070c7a",
"0x5ef4b97ebd270b978a36896fd33d48c425decea56b2f52482368c8bb5914efa5",
"0x3160509c5210a06161d87f378f23df4c698855746b8335aed2152b8ba5630660",
"0x82ffb0ea09983e82851d29e926faec711add5b4a757fff58a8b97b9bd51c2c00",
"0x032fabdd455d7466bd7fbda60b9f27f178df08312e2d2d06108b1d0a2d8bfc94",
"0xa19fc8e31652eda0b902d05a4c4aebd99edf2402e4e2c1d920dae1304baf97ba",
"0xe3ce82736400f62585262774cfda2b0d693049e1ebe4ac4fa5289ed2f486700d",
"0x5bab52647ab13dfcabbd740caf47ed9105a85e693d45a2e5d2541cd6bf7a9421",
"0x6051dc1c4d0bd62e16b5552b30e8ce3307db5deeb32213f4aa43692acf00c4c5",
"0xfbe8e33fef43e5debb442e55f2e2a66f1bbf3abdde4f074e42a947b3351507f6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
