import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => {
  return state.contact.items;
};
const getFilter = (state) => state.contact.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default { getContacts, getFilter, getVisibleContacts };
