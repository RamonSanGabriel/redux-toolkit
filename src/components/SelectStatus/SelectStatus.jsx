import { useDispatch, useSelector } from 'react-redux';
// import css from './SelectStatus.module.css';
import { getStatus } from '../../redux/selector';
import { localAction } from '../../redux/localSlice';

const SelectStatus = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);
  console.log(status);

  const handleChange = (e) => {
    dispatch(localAction(e.target.value));
    const statusColors = {
      green: 'green',
      orange: 'orange',
      red: 'red',
    };

    document.body.style.color = statusColors[e.target.value] || 'white';
  };

  return (
    <div>
      <select value={status} onChange={handleChange} name="select" id="select">
        <option value="green">Green</option>
        <option value="orange">Orange </option>
        <option value="red">Red </option>
      </select>
      <p>Font color status is {status}</p>
    </div>
  );
};
export default SelectStatus;
