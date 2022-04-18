import {useReducer, useEffect} from "react";

import axios from "axios";
import {reducerFunc} from "../context/ContextProducts";

export const initialState = {
  loading: false,
  data: [],
  error: "",
};

export function ReducerProducts(getAPI) {
  const {Api, property} = getAPI;

  const [state, dispatch] = useReducer(
    reducerFunc,
    initialState
  );

  useEffect(() => {
    (async () => {
      dispatch({type: "LOADING"});
      try {
        const res = await axios.get(Api);
        dispatch({
          type: "SUCCESS",
          Payload: res.data[property],
        });
      } catch (error) {
        dispatch({
          type: "ERROR",
          Payload: error,
        });
      }
    })();
  }, []);

  return {state, dispatch};
}
