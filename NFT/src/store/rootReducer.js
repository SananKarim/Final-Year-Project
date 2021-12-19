import { combineReducers } from "@reduxjs/toolkit";
import WalletReducer from "../Features/wallet/wallet.slicer";
import Web3Reducer from "../Features/web3/web3.slicer";

const rootReducer = combineReducers({
  Wallet: WalletReducer,
  Web3Instance: Web3Reducer,
});
export default rootReducer;
