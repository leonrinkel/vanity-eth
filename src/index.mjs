import fs from "fs/promises";

import Web3EthAccounts from "web3-eth-accounts";
const account = new Web3EthAccounts();

const FILENAME = process.env.FILENAME || "accounts.csv";

(async () => {
    const file = await fs.open(FILENAME, "a");
    for (let i = 0; i < 10; i++) {
        const { address, privateKey } = account.create();
        await file.write(`${privateKey},${address}\n`);
    }
})();
