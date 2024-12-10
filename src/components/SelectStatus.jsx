import { useDispatch, useSelector } from 'react-redux';
import { getStatus } from '../redux/selector';
import { localAction } from '../redux/localSlice';

const SelectStatus = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);

  const handleChange = (e) => {
    dispatch(localAction(e.target.value));
  };
  return (
    <div>
      <select value={status} onChange={handleChange}>
        <option value="Success">Success</option>
        <option value="Failed">Failed</option>
        <option value="Error">Error</option>
      </select>
      <p>Current status: {status}</p>
      <hr />
      <hr />
      <hr />
    </div>
  );
};

export default SelectStatus;
