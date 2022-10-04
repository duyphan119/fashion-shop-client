export type Category = {
	id: number;
	name: string;
	alias: string;
	thumbnail: string;
	parentId: number | null;
} & Partial<{ parent: Category; children: Array<Category> }>;

export type Account = {
	id: number;
	email: string;
	fullName: string;
	phone: string;
	createdAt: string;
	updatedAt: string;
};

export type Variant = {
	id: number;
	name: string;
};

export type VariantValue = {
	id: number;
	value: string;
} & Partial<Variant>;

export type Product = {
	id: number;
	name: string;
	alias: string;
	price: number;
	newPrice: number;
	thumbnail: string;
	description: string;
	detail: string;
	createdAt: string;
	updatedAt: string;
} & Partial<{ categories: Category }>;

export type WishlistItem = {};

export type ProductVariant = {
	id: number;
	sku: string;
	title: string;
	inventory: number;
	productId: number;
	thumbnail: string;
	variantIdThumbnail: number;
} & Partial<{ product: Product }>;

export type Cart = {
	id: number;
	accountId: number;
} & Partial<{ items: Array<CartItem>; account: Account }>;

export type CartItem = {
	productVariantId: number;
	quantity: number;
	cartId: number;
} & Partial<{ cart: Cart; productVariant: ProductVariant }>;

export type Order = {
	id: number;
	createdAt: string;
	updatedAt: string;
};

export type OrderItem = {
	productVariantId: number;
	quantity: number;
	orderId: number;
	price: number;
} & Partial<{ order: Order; productVariant: ProductVariant }>;

export type Auth = {
	account: Account;
	accessToken: string;
} & Partial<{ refreshToken: string }>;

// Body
export type CartItemBody = {
	productVariantId: number;
	quantity: number;
};

export type LoginBody = {
	email: string;
	password: string;
};

export type RegisterBody = {
	email: string;
	password: string;
	phone: string;
	fullName: string;
};

// Api
export type ResponseItems<T> = {
	items: Array<T>;
	count: number;
};
