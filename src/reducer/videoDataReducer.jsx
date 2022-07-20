import { actionTypes } from '../constant/actionTypes';

export const videoDataReducer = (state,{type,payload}) => {
 
  const { LOAD_DATA, FILTER, SORT_VIDEOS, SEARCH, SET_VIDEOS } = actionTypes;

  const{videos, category, categories, sortBy, searchInput} = payload;

  switch(type){
    case LOAD_DATA:
      return{
        ...state,
        data: videos,
        categories: categories,
      }
    case SET_VIDEOS:
    return{
      ...state,
      data: videos,
    }
    case FILTER:
      return{
        ...state,
        selectedCategory: category,
      }
    case SORT_VIDEOS:
      return{
        ...state,
        sortBy: sortBy,
      }
    case SEARCH:
      return{
        ...state,
       searchText: searchInput
      }
    default:
      return state
  }

}
