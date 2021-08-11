import React, { Component } from "react";
import PropTypes from "prop-types";
import s from './ContactList.module.css';

class ContactList extends Component {
    render() {
       
        return (
            <ul className={s.list}>
               {this.props.children}
            </ul>
        )
    }
}
ContactList.propTypes = {
    children: PropTypes.any.isRequired 
}
export default ContactList;