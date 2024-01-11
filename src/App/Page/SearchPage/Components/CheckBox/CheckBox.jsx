// CheckBox component
import PropTypes from 'prop-types';
import './styles.css';

const CheckBox = ({ id }) => {
  return (
    <div className={'content'}>
      <label className={'checkBox'} htmlFor={id}>
        <input
          id={id}
          type='checkbox'
        />
        <div className={'transition'}></div>
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CheckBox;
