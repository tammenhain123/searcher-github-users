import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { PayloadProps } from "../../store/ducks/history";
import { NavLink } from 'react-router-dom';

interface HistoryProps {
  searchEvent: PayloadProps;
}

export const HistoryComponent: React.FC<HistoryProps> = ({ searchEvent }) => {
  return (

    <tr>
      <td><NavLink to={`/search/${searchEvent.value}`}>{searchEvent.value}</NavLink></td>
      <td>{searchEvent.dateTime}</td>
    </tr>

  );
};
