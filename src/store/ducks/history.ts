import { Reducer } from "redux";

enum ActionTypes {
  add = "add/history",
}

export interface PayloadProps {
  id: number;
  value: string;
  dateTime: string;
}

export interface StateProps {
  history: Array<PayloadProps>;
}

export interface ActionProps {
  type: string;
  value: PayloadProps;
}

const initialState: StateProps = {
  history: [],
};

const reducer: Reducer<StateProps, ActionProps> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.add:
      return {
        ...state,
        history: [...state.history, {
          id: parseInt((Math.random() * 100).toString()),
          value: action.value.value,
          dateTime: action.value.dateTime,
        }],
      };
    default:
      return state;
  }
};

export const actions = {
  add: (value: PayloadProps) => ({ type: ActionTypes.add, value }),
};

export default reducer;
