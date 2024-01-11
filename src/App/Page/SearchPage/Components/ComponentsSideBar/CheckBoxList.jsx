import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import useHandleCheckBox from './Hooks/useHandleCheckBox';

const CheckBoxList = ({ setProduct, selected, lista, is }) => {
  const { handleCheckBoxChange, precioSelected } = useHandleCheckBox(setProduct, selected, is);

  return (
    <>
      <p>{is}</p>
      {lista.map((precio, index) => (
        <Col key={index}>
          <input
            type='checkbox'
            id={precio}
            checked={precioSelected[precio] || false}
            onChange={(e) => handleCheckBoxChange(lista, e)}
          />{' '}
          <label htmlFor={index}>{precio}</label>
        </Col>
      ))}
    </>
  );
};

CheckBoxList.propTypes = {
  setProduct: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  lista: PropTypes.array.isRequired,
  is: PropTypes.string.isRequired,
};

export default CheckBoxList;
