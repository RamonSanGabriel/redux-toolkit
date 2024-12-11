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
      <select
        value={status}
        onChange={handleChange}
        style={{
          color: statusFontColor(status),
          backgroundColor: 'transparent',
          border: 'none',
          padding: '0.5rem',
          borderRadius: '0.5rem',
        }}
        className={css.selectStatus}
      >
        <option className={css.success} value="Success">
          <p>Success</p>
        </option>
        <option className={css.failed} value="Failed">
          Failed
        </option>
        <option className={css.error} value="Error">
          Error
        </option>
      </select>
      <p
        className={css.currentStatus}
        style={{
          color: statusFontColor(css.currentStatus),
          fontWeight: 'bold',
          fontSize: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        Current status: {status}
      </p>
      <hr />
      <hr />
      <hr />
    </div>
  );
};

export default SelectStatus;
