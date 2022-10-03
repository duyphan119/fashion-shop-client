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
			{children}
			<FooterClient />
		</main>
	);
};
