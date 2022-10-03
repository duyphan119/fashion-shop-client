import { useParams } from "react-router-dom";

export const ViewProductsPage = () => {
	const { alias } = useParams();
	return <div>View Products {alias} Page</div>;
};
