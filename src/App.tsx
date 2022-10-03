import { Routes, Route } from "react-router-dom";
import { LayoutClient } from "./layouts/LayoutClient/LayoutClient";
import { LayoutProfile } from "./layouts/LayoutProfile/LayoutProfile";
import { CartPage } from "./pages/CartPage/CartPage";
import { ChangePasswordPage } from "./pages/ChangePasswordPage/ChangePasswordPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { PaymentPage } from "./pages/PaymentPage/PaymentPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { ViewOrdersPage } from "./pages/ViewOrdersPage/ViewOrdersPage";
import { ViewProductPage } from "./pages/ViewProductPage/ViewProductPage";
import { ViewProductsPage } from "./pages/ViewProductsPage/ViewProductsPage";
import { WishlistPage } from "./pages/WishlistPage/WishlistPage";
export const App = () => {
	return (
		<Routes>
			<Route path="/">
				<Route
					index
					element={
						<LayoutClient>
							<HomePage />
						</LayoutClient>
					}
				/>
				<Route path="login" element={<LoginPage />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="product">
					<Route index element={<NotFoundPage />} />
					<Route
						path=":alias"
						element={
							<LayoutClient>
								<ViewProductPage />
							</LayoutClient>
						}
					/>
					<Route path="category">
						<Route index element={<NotFoundPage />} />
						<Route
							path=":alias"
							element={
								<LayoutClient>
									<ViewProductsPage />
								</LayoutClient>
							}
						/>
					</Route>
				</Route>
				<Route path="account">
					<Route
						index
						element={
							<LayoutProfile>
								<ProfilePage />
							</LayoutProfile>
						}
					/>
					<Route
						path="order"
						element={
							<LayoutProfile>
								<ViewOrdersPage />
							</LayoutProfile>
						}
					/>
					<Route
						path="wishlist"
						element={
							<LayoutProfile>
								<WishlistPage />
							</LayoutProfile>
						}
					/>
					<Route
						path="change-password"
						element={
							<LayoutProfile>
								<ChangePasswordPage />
							</LayoutProfile>
						}
					/>
				</Route>
				<Route path="cart" element={<CartPage />} />
				<Route path="payment" element={<PaymentPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};
