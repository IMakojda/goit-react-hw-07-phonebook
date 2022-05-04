import React from "react";
import s from './contacts.module.css'
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from "Redux/SliceApi";

const ContactItem = ({ nameItem, numberIem, id }) => {
  const [
    deleteContacts,
    { isLoading: isDeleting },
  ] = useDeleteContactMutation();

  return (
    <li className={s.list__item} key={id}>
      <p className={s.list__name}>{nameItem} :<span className={s.list__span}>{numberIem}</span></p>
      <button onClick={() => deleteContacts(id)} className={s.list__btn}>{isDeleting ? 'Deleting...' : "Delete"}</button>
    </li>
  );
}

export default ContactItem;
ContactItem.propTypes = {
  nameItem: PropTypes.string.isRequired,
  numberIem: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};