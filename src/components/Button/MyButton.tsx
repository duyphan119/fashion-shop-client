import { FC, memo, CSSProperties, ReactNode } from "react";
import { SpinLoading } from "../Loading/SpinLoading";

interface Props {
	buttonClassName?: string;
	buttonStyle?: CSSProperties;
	type?: "button" | "submit" | "reset";
	children?: ReactNode;
	disabled?: boolean;
	loading?: boolean;
	loadingStyle?: CSSProperties;
}

export const MyButton: FC<Props> = memo(({ children, buttonClassName, buttonStyle, type, disabled, loading, loadingStyle }) => {
	return (
		<button
			type={type}
			className={`text-white flex items-center justify-center  py-2 text-lg hover:text-blue-500 hover:bg-white hover:border-blue-500 border-white border-2 border-solid bg-blue-500 ${buttonClassName}`}
			style={{ ...buttonStyle }}
			disabled={disabled}
		>
			{loading && <SpinLoading />}
			{children}
		</button>
	);
});
