import { ARTICLES_FETCHED } from "./articleAction";
const initialState = [];
export default function articleReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case ARTICLES_FETCHED: {
      //console.log(action.payload);
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
