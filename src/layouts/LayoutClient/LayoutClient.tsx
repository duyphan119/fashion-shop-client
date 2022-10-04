import { FC, ReactNode } from "react";
import { FooterClient } from "../../components/FooterClient/FooterClient";
import { HeaderClient } from "../../components/HeaderClient/HeaderClient";

interface Props {
	children?: ReactNode;
}
export const LayoutClient: FC<Props> = ({ children }) => {
	return (
		<main>
			<HeaderClient />
			<div className="h-20"></div>
			{children}
			<FooterClient />
		</main>
	);
};
