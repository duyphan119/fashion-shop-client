import { FC, Fragment, CSSProperties, memo } from "react";

interface Props {
	errors?: any;
	register?: any;
	label?: string;
	wrapperClassName?: string;
	labelClassName?: string;
	inputClassName?: string;
	errorClassName?: string;
	wrapperStyle?: CSSProperties;
	labelStyle?: CSSProperties;
	inputStyle?: CSSProperties;
	errorStyle?: CSSProperties;
	name?: string;
	errorMessage?: string;
	id?: string;
	type?: string;
	validation?: any;
}

export const InputText: FC<Props> = memo(
	({
		errors,
		register,
		label,
		wrapperClassName,
		labelClassName,
		inputClassName,
		errorClassName,
		wrapperStyle,
		labelStyle,
		inputStyle,
		errorStyle,
		name,
		errorMessage,
		id,
		type,
		validation,
	}) => {
		return (
			<Fragment>
				<div
					style={{ ...wrapperStyle }}
					className={`focus-within:${errors[name || ""] ? "border-red-500" : "border-blue-500"} border-solid border-2 ${
						errors[name || ""] ? "border-red-500" : "border-black"
					} mt-4 ${wrapperClassName || ""}`}
				>
					<label className={`block bg-white px-1 pt-1 ${labelClassName || ""}`} htmlFor={id} style={{ fontSize: 10, ...labelStyle }}>
						{label}
					</label>
					<input
						type={type || "text"}
						id={id}
						className={`w-full border-none outline-none px-1 pb-1 ${inputClassName || ""}`}
						autoComplete="off"
						{...register(name, validation)}
						style={{ ...inputStyle }}
					/>
				</div>
				{errors[name || ""] && (
					<div style={{ ...errorStyle }} className={`text-red-500 text-xs ${errorClassName || ""}`}>
						{errorMessage}
					</div>
				)}
			</Fragment>
		);
	}
);
