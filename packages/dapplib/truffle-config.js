require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot blanket radar peace public hard light army genius'; 
let testAccounts = [
"0x1a1900eabb02b5520415a3d40f84cc050a75a6073e84541e40c67841995b75ae",
"0x926a57a67bc6637e2b798d8e9c5f0a6c4d9520e98847845d4a53b4e447a1545c",
"0xaf4cf8228f0edbe7b099df88eb3956cc60f74ed95071ab3f8858c5948dfdd965",
"0x0821e89fe1f8673c55ac8f486fdc607211bda099dc634e819d85eebd3c86c009",
"0x5246d8261615f47f46341b7b8b04ef810cfe1f2179fbddd850a286914847e6ba",
"0x98bae19e5d8662bbaa692c7ba13f67ae036a952660bdec991076464a1df24aa1",
"0x5a68addf77c44b61e0d7669bcf1c659d3b2505ee9b8867da6e3f14f5e88911a7",
"0x18b970760784f7890e6a639265f86538584af6c0253a75e4227fc368028cbad6",
"0x994b84005995e60408a9f1ad74d49d4bc4163b175e43508d751465e52eb1a880",
"0xd019ad599136253d67319ddf460458d5100016db62afe5e9439c98b2f79a497d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

