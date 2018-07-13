import { CHANGE_CAT_TYPE } from "../actionTypes/constants";
const InitialState = {
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
      type: "iron "
    },
    {
      name: "E",
      type: "gold"
    }
  ]
};

const dashboard = (state = InitialState, action) => {
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

export default dashboard;
