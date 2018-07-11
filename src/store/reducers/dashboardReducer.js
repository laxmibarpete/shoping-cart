import { CHANGE_CAT_TYPE } from "../actionTypes/constants";
const InitialState = {
  currentSelCatType: "all",
  filteredList: [],
  inStockData: [
    {
      name: "A",
      type: "gold"
    },
    {
      name: "B",
      type: "silver"
    },
    {
      name: "C",
      type: "platinum"
    },
    {
      name: "D",
      type: "ino "
    },
    {
      name: "E",
      type: "gold"
    }
  ]
};

export default function dashboard(state = InitialState, action) {
  switch (action.type) {
    case CHANGE_CAT_TYPE:
      console.log("payload", action.payload);
      debugger
      if (action.payload !== 'all') {
      return { ...state, filteredList : state.inStockData.filter( item =>
          item.type === action.payload)}
      } else {
          return { ...state, filteredList: [] }
      }
    default:
      return state;
  }
}
