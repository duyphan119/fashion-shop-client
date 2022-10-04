import { FC, memo, CSSProperties, ReactNode } from "react";

interface Props {
	loadingStyle?: CSSProperties;
	loadingClassName?: string;
}
export const SpinLoading: FC<Props> = ({ loadingStyle, loadingClassName }) => {
	return <div className={`loader ${loadingClassName || ""}`} style={{ width: 20, height: 20, borderWidth: 2, marginRight: 4, ...loadingStyle }}></div>;
};
