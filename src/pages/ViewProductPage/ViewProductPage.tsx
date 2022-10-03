import { useParams } from "react-router-dom";

export const ViewProductPage = () => {
	const { alias } = useParams();
	return <div>View Product {alias} Page</div>;
};
