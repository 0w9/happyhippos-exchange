import {Connection, clusterApiUrl, PublicKey} from "@solana/web3.js";
const web3 = require("@solana/web3.js");

async function run() {

    const wallet = (window.top as any).phantom.solana.publicKey.toString();
    const connection = new Connection(clusterApiUrl('mainnet-beta'));
    
    {
        const transaction = new web3.Transaction().add(
            web3.splToken.Token.createTransferInstruction(
             web3.splToken.TOKEN_PROGRAM_ID,
              fromTokenAccount.address,
              toTokenAccount.address,
              fromWallet.publicKey,
              [],
              1,
            ),
          );
          
          // Sign transaction, broadcast, and confirm
          await web3.sendAndConfirmTransaction(
            connection,
            transaction,
          );
}}