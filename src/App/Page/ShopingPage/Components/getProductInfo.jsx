import { useSearchProductsByID } from '../../../Components/Cart/Components/Products/Components/SearchProductsByID';

export const useGetProductInfo = (productId) => {
	const Data = useSearchProductsByID(productId);
	const content = (
		<>
			<span>{Data.name}</span>
			<span>${Data.price}</span>
		</>
	);
	const total = Data.price;
	return { content, total };
};
