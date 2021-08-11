import React, { Component } from "react";
import s from './ContactItem.module.css';
import PropTypes, { object } from "prop-types";
class ContactItem extends Component{
    render() {
        const { handleBtnDelete ,visibleContacts} = this.props;
        
        return (
             <>
        {visibleContacts.map(({ id, name, number }, i) => (
          <li key={id} className={s.item}>
            <span className={s.text}>
              {`${i + 1})    `}
              {name}: {number}
            </span>
            <button type="button" onClick={() => handleBtnDelete(id)} className={s.button}>
              Delete
            </button>
          </li>
        ))}
        </>
    )
        
    }
}
ContactItem.propTypes = {
  handleBtnDelete: PropTypes.func.isRequired,
  visibleContacts: PropTypes.arrayOf(object).isRequired
}
export default ContactItem;