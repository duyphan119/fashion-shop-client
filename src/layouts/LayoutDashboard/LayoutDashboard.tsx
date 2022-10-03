import { FC, ReactNode } from "react";

interface Props {
	children?: ReactNode;
}
export const LayoutDashboard: FC<Props> = ({ children }) => {
	return <main>{children}</main>;
};
