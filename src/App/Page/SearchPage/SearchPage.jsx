import { useParams } from 'react-router-dom';
import { fetchProductos, selectProductByName, selectProductStatus } from '../../../Data/Store/Features/Products/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderPage } from '../LoaderPage/LoaderPage';
import { useEffect } from 'react';
import { Lista, ListaDesordenada } from './estilos';
import Producto from '../Product/Routes/ListaProductos/Components/Producto/Index';

export const SearchPage = () => {
	const { nameProduct } = useParams();
	const productStatus = useSelector(selectProductStatus);
	const product = useSelector((state) => selectProductByName(state, nameProduct));
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProductos());
	}, [dispatch, nameProduct]);

	let content;

	switch (productStatus) {
		case 'idle':
			{
				content = 'No Esta Cargando';
			}
			break;
		case 'loading':
			{
				content = <LoaderPage />;
			}
			break;
		case 'succeeded':
			{
				content = (
					<ListaDesordenada>
						{product.length > 0 ? (
							product.map((producto) => (
								<Lista key={producto.id}>
									<Producto
										producto={producto}
										Mostrar={false}
									/>
								</Lista>
							))
						) : (
							<h2>No se encontro nada</h2>
						)}
					</ListaDesordenada>
				);
			}
			break;
		case 'failed':
			{
				content = 'error';
			}
			break;
		default:
			content = 'Algo por defecto';
			break;
	}
	return content;
};
