import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputText } from "../../components/Form/InputText/InputText";
import { MyButton } from "../../components/Button/MyButton";
import { loginApi } from "../../apis/authApi";
import { SUCCESS_CODE, SUCCESS_MESSAGE } from "../../constants";
import { useAppDispatch } from "../../redux/store";
import { authActions } from "../../redux/reducers/authReducer";
import { useMutation } from "react-query";
type Inputs = {
	email: string;
	password: string;
};
export const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const mutation = useMutation((body: any) => loginApi(body));
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
				<div className="text-center text-4xl">Đăng nhập</div>
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
				<div className="flex items-center justify-between my-1 text-sm text-blue-500 underline">
					<Link to="/register" className="">
						Đăng ký
					</Link>
					<Link to="/forgot-password" className="">
						Quên mật khẩu
					</Link>
				</div>
				<MyButton
					type="submit"
					disabled={mutation.isLoading}
					loading={mutation.isLoading}
					buttonClassName={`w-full mt-2 ${mutation.isLoading ? "opacity-80" : ""}`}
				>
					{mutation.isLoading ? "Đang tải..." : "Đăng nhập"}
				</MyButton>
			</form>
		</div>
	);
};
