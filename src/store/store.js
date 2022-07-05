import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middlerWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlerWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
