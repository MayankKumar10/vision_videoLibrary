import React, {
	useReducer,
	createContext,
	useContext,
} from "react";
import {
	FilterInitialState,
	FilterReducer,
} from "../reducer/FilterReducer";

const FilterContext = createContext();

function FilterProvider({ children }) {
	const [state, dispatch] = useReducer(
		FilterReducer,
		FilterInitialState
	);

	const value = {
		state,
		dispatch,
	};

	return (
		<>
			<FilterContext.Provider value={value}>
				{children}
			</FilterContext.Provider>
		</>
	);
}

const UseFilter = () =>
	useContext(FilterContext);

export { UseFilter, FilterProvider };
