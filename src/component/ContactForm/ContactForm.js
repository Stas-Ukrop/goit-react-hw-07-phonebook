import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { contactsOperations } from "../../redux/partOfRedux";
import styles from "./ContactForm.module.css";

const ContactForm = ({ addContactToRedux, contacts }) => {
  const [contact, setContact] = useState({
    text: "",
    number: "",
  });
  const addContact = () => {
    const includeContacts = contacts.map((item) => item.text);
    if (contact.nameContact === "" || contact.number === "") {
      return alert("Пожалуйста введите все данные в поля формы");
    }

    if (!includeContacts.includes(contact.text)) {
      addContactToRedux(contact);
      setContact({
        text: "",
        number: "",
      });
    } else {
      return alert("Данные в полях формы уже существуют, введите другое имя");
    }
  };

  return (
    <div className={styles.mainConteiner}>
      <div className={styles.conteiner}>
        <label>Input name</label>
        <input
          type="text"
          name="text"
          value={contact.text}
          onChange={(event) => {
            setContact((contact) => ({
              ...contact,
              [event.target.name]: event.target.value,
            }));
          }}
        ></input>
      </div>
      <div className={styles.conteiner}>
        <label>Input number</label>
        <input
          type="text"
          name="number"
          value={contact.number}
          onChange={(event) => {
            setContact((contact) => ({
              ...contact,
              [event.target.name]: event.target.value,
            }));
          }}
        ></input>
      </div>
      <button type="button" onClick={addContact} className={styles.button}>
        Добавить контакт
      </button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addContactToRedux: (obj) => dispatch(contactsOperations.addContact(obj)),
});
export default connect(null, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  addContactToRedux: PropTypes.func,
};
