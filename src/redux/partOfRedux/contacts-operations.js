import axios from "axios";
import action from "./contacts-action";

axios.defaults.baseURL = "http://localhost:4040";

const getContacts = () => (dispatch) => {
  dispatch(action.getContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(action.getContactsSuccess(data)))
    .catch((error) => dispatch(action.getContactsError(error)));
};

const addContact = (obj) => (dispatch) => {
  dispatch(action.addContactsRequest());
  axios
    .post("/contacts", obj)
    .then(({ data }) => dispatch(action.addContactsSuccess(data)))
    .catch((error) => dispatch(action.addContactsError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(action.deleteContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(action.deleteContactsSuccess(id)))
    .catch((error) => action.deleteContactsError(error));
};

export default { addContact, deleteContact, getContacts };