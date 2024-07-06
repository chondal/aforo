import { types } from "../types/types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        user: action.payload,
        logged: true,
      };

    case types.logout:
      return {
        user: null,
        logged: false,
      };

    default:
      return state;
  }
};
