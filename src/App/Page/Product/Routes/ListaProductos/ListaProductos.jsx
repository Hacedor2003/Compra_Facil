import { useState, useEffect } from 'react';
import { Contenedor, ContenedorLista, Lista } from './Estilos';
import { selectAllProducts, fetchProductos, selectProductStatus, selectProductError } from '../../../../../Data/Store/Features/Products/ProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Categoria } from './Components/Categorias/Index';
import { LoaderPage } from '../../../LoaderPage/LoaderPage';

export const ListaProductos = () => {
	const [productosPorCategoria, setProductosPorCategoria] = useState({});
	const productStatus = useSelector(selectProductStatus);
	const data = useSelector(selectAllProducts);
	const error = useSelector(selectProductError);
	const dispatch = useDispatch();

	useEffect(() => {
		if (productStatus === 'idle') {
			dispatch(fetchProductos());
		}
	}, [productStatus, dispatch]);

	useEffect(() => {
		if (productStatus === 'succeeded') {
			const productosGroupedByCategory = data.reduce((acc, producto) => {
				acc[producto.category] = [...(acc[producto.category] || []), producto];
				return acc;
			}, {});
			setProductosPorCategoria(productosGroupedByCategory);
		}
	}, [productStatus, data]);

	let content;

	switch (productStatus) {
		case 'loading':
			{
				content = <LoaderPage />;
			}
			break;
		case 'succeeded':
			{
				content = Object.keys(productosPorCategoria).map((category) => (
					<ContenedorLista key={category}>
						<h2>{category}</h2>
						<Lista key={category}>
							{productosPorCategoria[category].map((producto) => (
								<Categoria
									key={producto.id}
									category={producto.category}
									producto={producto}
								/>
							))}
						</Lista>
					</ContenedorLista>
				));
			}
			break;
		case 'failed':
			{
				content = <>{error}</>;
			}
			break;
		default:
			content = 'No está cargando';
			break;
	}

	return <Contenedor>{content}</Contenedor>;
};
