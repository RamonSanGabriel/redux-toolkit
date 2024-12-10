import { useDispatch, useSelector } from 'react-redux';
import { getStatus } from '../../redux/selector';
import { localAction } from '../../redux/localSlice';
import css from './SelectStatus.module.css';

const SelectStatus = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);

  const handleChange = (e) => {
    dispatch(localAction(e.target.value));
  };

  const statusFontColor = () => {
    if (status === 'success') {
      return 'green';
    }
  };
  return (
    <div>
      <select value={status} onChange={handleChange}>
        <option value="Success">
          <p>Success</p>
        </option>
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
