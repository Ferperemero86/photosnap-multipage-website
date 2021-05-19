import { createStore as reduxCreateStore } from "redux";

import rootReducer from "./reducers";

const store = () => reduxCreateStore(rootReducer);

export default store;
