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
    const s = 'Success';
    const f = 'Failed';

    if (status === s) {
      document.body.style.color = 'green';
    } else if (status === f) {
      document.body.style.color = 'orange';
    } else {
      document.body.style.color = 'red';
    }
  };

  return (
    <div>
      <select onChange={handleChange} value={status}>
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

      {/*   <div value={status} className={css.currentStatus}>
        <p>Current Status: {status}</p>
      </div> */}
      <hr />
      <hr />
      <hr />
    </div>
  );
};

export default SelectStatus;
