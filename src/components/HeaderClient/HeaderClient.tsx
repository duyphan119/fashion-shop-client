import { Link, NavLink, useNavigate } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { BsBag, BsSuitHeart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { ChangeEvent, FC, FormEvent, memo, ReactNode, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../../config/api";

interface IconItemProps {
	to: string;
	count: number;
	icon: ReactNode;
	linkClassName?: string;
}
const IconItem: FC<IconItemProps> = memo(({ to, count, icon, linkClassName }) => {
	return (
		<li className="relative">
			<Link to={to} className={`text-xl ${linkClassName || ""}`}>
				{icon}
			</Link>
			{count > 0 && (
				<div
					className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-blue-500 text-white"
					style={{ fontSize: 9, lineHeight: "9px", borderRadius: "50%" }}
				>
					{count}
				</div>
			)}
		</li>
	);
});

interface CategoryProps {
	to: string;
	text: string;
}

const CategoryItem: FC<CategoryProps> = memo(({ to, text }) => {
	return (
		<li className="h-full">
			<NavLink
				to={to}
				className={({ isActive }) => (isActive ? "category-header-active text-blue-500" : "") + " hover:text-blue-500 relative block h-full"}
			>
				{text}
			</NavLink>
		</li>
	);
});

const SearchInput = () => {
	const [keyword, setKeyword] = useState<string>("");

	const { refetch, isLoading, error, data } = useQuery([keyword], () => fetchData().get("product?q=" + keyword), {
		enabled: false,
		refetchOnWindowFocus: false,
	});
	console.log("HeaderClient/SearchInput -- log:", { isLoading, error, data });
	const navigate = useNavigate();

	useEffect(() => {
		const timerId = setTimeout(() => {
			keyword && handleSearch();
		}, 500);
		return () => clearTimeout(timerId);
	}, [keyword]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		navigate(`/search?q=${keyword}`);
	};

	const handleSearch = async () => {
		console.log(`search product with keyword: ${keyword}`);
		refetch();
	};
	return (
		<form onSubmit={handleSubmit} className="border w-60 border-black flex items-center px-1.5 gap-1 py-0.5 rounded-sm">
			<input type="search" className="flex-1 outline-none border-none" placeholder="Tìm ở đây" value={keyword} onChange={handleChange} />
			<ImSearch />
		</form>
	);
};

export const HeaderClient = () => {
	return (
		<header className="fixed top-0 left-0 w-screen bg-white h-20 px-40 flex items-center justify-between">
			<div className="flex-1 text-center">
				<SearchInput />
			</div>
			<div className="h-full flex items-center flex-col justify-between">
				<div className="flex-1 flex items-center text-2xl font-bold text-blue-500 h-14">
					<Link to="/">FASHION</Link>
				</div>
				<ul className="h-6 flex items-center justify-center gap-5 mb-1">
					<CategoryItem to="/product/category/sale" text="Sale" />
					<CategoryItem to="/product/category/nam" text="Nam" />
					<CategoryItem to="/product/category/nu" text="Nữ" />
				</ul>
			</div>
			<ul className="flex-1 justify-end flex items-center gap-4">
				<IconItem to="/account" icon={<AiOutlineUser />} linkClassName="text-2xl" count={0} />
				<IconItem to="/wishlist" icon={<BsSuitHeart />} count={0} />
				<IconItem to="/cart" icon={<BsBag />} count={0} />
			</ul>
		</header>
	);
};
