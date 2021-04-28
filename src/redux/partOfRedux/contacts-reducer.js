import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import action from "./contacts-action";

const items = createReducer([], {
  [action.getContactsSuccess]: (_, { payload }) => payload,
  [action.addContactsSuccess]: (state, { payload }) => [...state, payload],
  [action.deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [action.filterContacts]: (_, { payload }) => payload,
});
const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
