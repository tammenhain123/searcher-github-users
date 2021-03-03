import { createStore } from "redux";
import reducers from "./reducers";

import { StateProps as HistoryProps } from './ducks/history';

export interface RootProps {
  history: HistoryProps;
}

const store = createStore(reducers);

export default store;
