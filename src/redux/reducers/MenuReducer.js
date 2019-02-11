import notify from 'msg-notify';
import { MENU } from '../actions/types';
const initialState = {
  menu: []
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU.ADD_MENU_ITEM:
      return { ...state, menuItem: action.menuItem };
    case MENU.GET_MENU:
      return { ...state, menu: action.menu };

    default:
      return state;
  }
};
export default menuReducer;