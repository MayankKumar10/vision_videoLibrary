import React, {
	createContext,
	useContext,
} from "react";

import { ReducerProducts } from "../reducer/ReducerProducts";

export const reducerFunc = (
	state,
	{ type, Payload }
) => {
	switch (type) {
		case "LOADING":
			return { ...state, loading: true };
		case "SUCCESS":
			return {
				...state,
				loading: false,
				data: Payload,
			};
		case "ERROR":
			return {
				...state,
				loading: false,
				error: Payload,
			};
		default:
			return state;
	}
};

const ProductContext = createContext({
	productState: { ...reducerFunc },
	productDispatch: () => {},
});

function ContextProducts({ children }) {
	const getAPI = {
		Api: "/api/videos",
		property: "videos",
	};

	const {
		state: productState,
		dispatch: productDispatch,
	} = ReducerProducts(getAPI);

	const { videos, loading } = productState;

	return (
		<>
			<ProductContext.Provider
				value={{
					productState,
					productDispatch,
				}}
			>
				{children}
			</ProductContext.Provider>
		</>
	);
}

const AllVideos = () =>
	useContext(ProductContext);

export { AllVideos, ContextProducts };
