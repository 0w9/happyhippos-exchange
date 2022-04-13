import React, { Component } from 'react'
import {Connection, clusterApiUrl, PublicKey} from "@solana/web3.js";
import {Metadata} from "@metaplex-foundation/mpl-token-metadata";
import wlist from "../assets/wl.json";

type Props = {}

type State = {}

async function run() {

  if((window.top as any).phantom.solana.isPhantom) {

    const user_mints: any[] = [];

    const res = await (window.top as any).phantom.solana.connect();
    const wallet = (window.top as any).phantom.solana.publicKey.toString();
    const connection = new Connection(clusterApiUrl('mainnet-beta'));
    const response =  await connection.getParsedTokenAccountsByOwner(new PublicKey(wallet), {programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")}, "confirmed");

    for(let nft of response.value) {
      console.log(wlist.includes("J83ENggD6iuJYyjnZEdAbmSFBdSH5qAtFWbxbgDv5xsq"))
      }
  }
}

export default class Main extends Component<Props, State> {
  state = {}

  render() {
    return (
      <button onClick={run}>Click me</button> 
    )
  }
}