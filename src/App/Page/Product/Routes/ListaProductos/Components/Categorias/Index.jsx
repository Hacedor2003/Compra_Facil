import Producto from '../Producto/Index';
import { Lista } from './Estilos';

export const Categoria = ({ category, producto }) => {
	return (
		<>
			{
				<Lista>
					<Producto
						producto={producto}
						Mostrar={true}
					/>
				</Lista>
			}
		</>
	);
};
