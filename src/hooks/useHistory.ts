import { useDispatch, useSelector } from 'react-redux';

import { RootProps } from '../store';
import { PayloadProps, actions } from '../store/ducks/history';

export default function useHistory() {
  const dispatch = useDispatch();
  const { history } = useSelector(({ history }: RootProps) => history);

  return {
    /**
     * @readonly history data
     */
    history,
    /**
     * @param github payload properties
     */
    add: (value: PayloadProps) => dispatch(actions.add(value)),
  };
}
