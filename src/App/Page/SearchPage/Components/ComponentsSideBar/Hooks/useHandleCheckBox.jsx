import { useState } from 'react';

const useHandleCheckBox = (setProduct, selected, is) => {
	const [precioSelected, setPrecioSelected] = useState({});
	const [listaRespaldo, setListaRespaldo] = useState([]);

	const handleCheckBoxChange = (lista, e) => {
		const item = Number(e.target.id);
		const updatedSelection = {
			...precioSelected,
			[item]: e.target.checked,
		};
		setPrecioSelected(updatedSelection);
		if (!e.target.checked) {
			setProduct((prop) => (listaRespaldo.length > 0 ? listaRespaldo : prop));
		}
		if (e.target.checked && selected) {
			setProduct((prop) => {
				setListaRespaldo(prop.slice());
				if (is === 'Price') {
					return prop.filter((itemProp) => itemProp.price < item);
				} else if (is === 'Storage') {
					return prop.filter((itemProp) => itemProp.rating.count < item);
				}
			});
		}
	};

	return { handleCheckBoxChange, precioSelected };
};

export default useHandleCheckBox;
