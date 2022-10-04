import { FC, memo, CSSProperties, ReactNode } from "react";

interface Props {
	buttonClassName?: string;
	buttonStyle?: CSSProperties;
	type?: "button" | "submit" | "reset";
	children?: ReactNode;
	disabled?: boolean;
}

export const MyButton: FC<Props> = memo(({ children, buttonClassName, buttonStyle, type, disabled }) => {
	return (
		<button
			type={type}
			className={`text-white py-2 text-lg hover:text-blue-500 hover:bg-white hover:border-blue-500 border-white border-2 border-solid bg-blue-500 ${buttonClassName}`}
			style={{ ...buttonStyle }}
			disabled={disabled}
		>
			{children}
		</button>
	);
});
