import React, { useState, useEffect } from "react";
import ListItem from "../ListItem";
import { connect } from "react-redux";

import ContactForm from "../ContactForm";
import styles from "./ListContact.module.css";
import PropTypes from "prop-types";
import {
  contactsSelectors,
  contactsOperations,
  contactsActions,
} from "../../redux/partOfRedux";

const ListContact = ({ contacts, ListContacts, onDelete, onFilter }) => {
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    onFilter(filterText);
    ListContacts();
  }, [filterText]);

  return (
    <div className="blockText">
      <input
        type="text"
        className={styles.inputTextFilter}
        placeholder="фильт"
        onChange={(e) => {
          setFilterText(e.currentTarget.value);
        }}
      ></input>
      <ContactForm contacts={contacts} />
      <ListItem mass={contacts} onDelete={onDelete} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});
const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(contactsOperations.deleteContact(id)),
  onFilter: (text) => dispatch(contactsActions.filterContacts(text)),
  ListContacts: () => dispatch(contactsOperations.getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContact);

ListContact.propTypes = {
  massOfContacts: PropTypes.array,
  onDelete: PropTypes.func,
  onFilter: PropTypes.func,
};
