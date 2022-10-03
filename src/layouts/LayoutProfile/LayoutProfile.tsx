import { FC, ReactNode } from "react";

interface Props {
	children?: ReactNode;
}
export const LayoutProfile: FC<Props> = ({ children }) => {
	return <main>{children}</main>;
};
