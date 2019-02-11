import { MENU } from './types';

export const addMenuItem = menuItem => ({ type: MENU.ADD_MENU_ITEM, menuItem });
export const getMenu = menu => ({ type: MENU.GET_MENU, menu });
