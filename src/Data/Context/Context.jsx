import { createContext, useContext } from 'react';
import { useProfileData } from './GetContext';

// Creamos el contexto
export const DataContext = createContext(null);

// Creamos el proveedor
export const DataProvider = ({ children }) => {
	const profile = useProfileData();

	return <DataContext.Provider value={{ profile }}>{children}</DataContext.Provider>;
};

export default DataContext;
