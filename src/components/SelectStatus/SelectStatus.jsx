import { useDispatch, useSelector } from 'react-redux';
import { getStatus } from '../../redux/selector';
import { localAction } from '../../redux/localSlice';
import css from './SelectStatus.module.css';

const SelectStatus = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);

  const handleChange = (e) => {
    dispatch(localAction(e.target.value));

    console.log(status);
  };

  const statusFontColor = (className) => {
    const colors = {
      [css.success]: 'green',
      [css.failed]: 'orange',
      [css.error]: 'red',
    };

    return colors[className] ?? 'white';
  };

  return (
    <div>
      <div>
        <select value={status} onChange={handleChange}>
          <option className={css.success} value="Success">
            Success
          </option>
          <option className={css.failed} value="Failed">
            Failed
          </option>
          <option className={css.error} value="Error">
            Error
          </option>
        </select>
      </div>
      <div>
        <p>Current Status: {status}</p>
      </div>
      <hr />
      <hr />
      <hr />
    </div>
  );
};

export default SelectStatus;
