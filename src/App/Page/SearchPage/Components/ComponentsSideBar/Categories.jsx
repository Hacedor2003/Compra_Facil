import { useEffect, useState } from 'react';
import { fetchCategories, selectAllCategories, selectCategoryStatus } from '../../../../../Data/Store/Features/Products/Category/CategoriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Categories = ({setProduct,selected}) => {
  const categories = useSelector(selectAllCategories);
  const categoriesStatus = useSelector(selectCategoryStatus);
  const [categorySelection, setCategorySelection] = useState({});
  const [listaRespaldo, setListaRespaldo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoriesStatus === 'idle') {
      dispatch(fetchCategories());
    }
  }, [categoriesStatus, dispatch]);

  const handleCheckBoxChange = (e) => {
    const category = e.target.id;
    const updatedSelection = {
      ...categorySelection,
      [category]: e.target.checked,
    };
    setCategorySelection(updatedSelection);
    if (!e.target.checked) {
      setProduct((prop) => (listaRespaldo.length > 0 ? listaRespaldo : prop));
    }
    if (e.target.checked && selected) {
      setProduct((prop) => {
        setListaRespaldo(prop.slice());
        return prop.filter((itemProp) => itemProp.category === category);
      });
    }
  };

  let content = <p>Categorias</p>;

  if (categoriesStatus === 'succeeded') {
    content = categories.map((category) => (
      <Col key={category}>
        <input
          type='checkbox'
          id={category}
          checked={categorySelection[category] || false}
          onChange={handleCheckBoxChange}
        />
        {''}
        <label htmlFor={category}>{category}</label>
      </Col>
    ));
  }

  return <>{content}</>;
};

export default Categories;

Categories.propTypes = {
	setProduct: PropTypes.func.isRequired,
	selected: PropTypes.bool.isRequired,
};