import React from "react";
import ContactItem from "./contactsItem";
import s from './contacts.module.css'
import { useFetchContactsQuery } from "Redux/SliceApi";
import { useSelector } from "react-redux";

const ContactList = () => {
    const { data } = useFetchContactsQuery();
    const inputFilter = useSelector((state) => state.filter.filter);
    const contactList = data?.filter(item => item.name.toLowerCase().includes(inputFilter.toLowerCase()));

    return (
        <ul className={s.list}>
            {contactList && contactList.map(({ id, name, phone }) => (
                <ContactItem
                    nameItem={name}
                    numberIem={phone}
                    id={id}
                    key={id}
                />
            ))}
        </ul>
    );
}

export default ContactList;

