import { createStore } from "redux";
import { rootRdu } from "./components/reducer";

export const store=createStore(rootRdu);

//console.log('store:',store)