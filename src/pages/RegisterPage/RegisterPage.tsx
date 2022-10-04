import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputText } from "../../components/Form/InputText/InputText";
import { MyButton } from "../../components/Button/MyButton";
import { registerApi } from "../../apis/authApi";
import { SUCCESS_CODE, SUCCESS_MESSAGE } from "../../constants";
import { useAppDispatch } from "../../redux/store";
import { authActions } from "../../redux/reducers/authReducer";
import { useMutation } from "react-query";
type Inputs = {
	fullName: string;
	email: string;
	password: string;
	phone: string;
};
export const RegisterPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const mutation = useMutation((body: any) => registerApi(body));
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const onSubmit: SubmitHandler<Inputs> = async (body) => {
		mutation.mutate(body);
	};

	if (mutation.isSuccess) {
		const res = mutation.data;
		const { code, message, data } = res.data;
		if (code === SUCCESS_CODE || message === SUCCESS_MESSAGE) {
			dispatch(authActions.register(data));
			navigate("/");
		}
	}

	return (
		<div className="w-screen flex items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-blue-900">
			<form onSubmit={handleSubmit(onSubmit)} style={{ minWidth: 400 }} className=" p-10 bg-white">
				<div className="text-center text-4xl">Đăng ký</div>
				<InputText
					label="Họ tên"
					name="fullName"
					id="fullName"
					wrapperClassName="mt-4"
					register={register}
					errors={errors}
					errorMessage="Họ tên không được để trống"
					validation={{ required: true }}
				/>
				<InputText
					label="Email"
					name="email"
					id="email"
					wrapperClassName="mt-4"
					register={register}
					errors={errors}
					errorMessage="Địa chỉ email không hợp lệ"
					validation={{ required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g }}
				/>
				<InputText
					type="password"
					label="Mật khẩu"
					name="password"
					id="password"
					wrapperClassName="mt-4"
					register={register}
					errors={errors}
					errorMessage="Mật khẩu ít nhất 6 kí tự"
					validation={{ required: true, minLength: 6 }}
				/>
				<InputText
					label="Số điện thoại"
					name="phone"
					id="phone"
					wrapperClassName="mt-4"
					register={register}
					errors={errors}
					errorMessage="Số điện thoại không hợp lệ"
					validation={{ required: true, pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/ }}
				/>
				<div className="flex items-center justify-between my-1 text-sm text-blue-500 underline">
					<Link to="/login" className="">
						Đăng nhập
					</Link>
				</div>
				<MyButton
					type="submit"
					disabled={mutation.isLoading}
					loading={mutation.isLoading}
					buttonClassName={`w-full mt-2 ${mutation.isLoading ? "opacity-80" : ""}`}
				>
					{mutation.isLoading ? "Đang tải..." : "Đăng ký"}
				</MyButton>
			</form>
		</div>
	);
};
