const FilterInitialState = {
  category: {
    All: false,
    Laptop: false,
    Gaming_Laptops: false,
    CPU: false,
    Phones: false,
  },
  rating: "",
  sortBy: "",
  price: 100000,
};

const FilterReducer = (state, {type, payload}) => {
  switch (type) {
    case "ALL":
      return {
        ...state,
        category: {
          ...state["category"],
          All: !state.category.All,
          Gaming_Laptops: false,
          Laptop: false,
          CPU: false,
          Phones: false,
        },
      };
    case "GAMING_LAPTOPS":
      return {
        ...state,
        category: {
          ...state["category"],
          Gaming_Laptops: !state.category.Gaming_Laptops,
          Laptop: false,
          CPU: false,
          Phones: false,
          All: false,
        },
      };
    case "LAPTOP":
      return {
        ...state,
        category: {
          ...state["category"],
          Laptop: !state.category.Laptop,
          Gaming_Laptops: false,
          CPU: false,
          Phones: false,
          All: false,
        },
      };
    case "CPU":
      return {
        ...state,
        category: {
          ...state["category"],
          CPU: !state.category.CPU,
          Gaming_Laptops: false,
          Laptop: false,
          Phones: false,
        },
      };
    case "PHONES":
      return {
        ...state,
        category: {
          ...state["category"],
          Phones: !state.category.Phones,
          Gaming_Laptops: false,
          Laptop: false,
          CPU: false,
          All: false,
        },
      };
    default:
      return state;
  }
};

export {FilterInitialState, FilterReducer};
