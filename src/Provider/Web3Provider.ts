import { JsonRpcProvider } from "ethers";

const infuraURL = 'https://goerli.infura.io/v3/8cefcfc23e224bb88d42d7e01d7e0202';
const web3provider = new JsonRpcProvider(infuraURL);

export default web3provider;