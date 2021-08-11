import React, { Component } from "react";
import PropTypes from "prop-types";
import s from './FormContacts.module.css';

class FormContacts extends Component {

    state = {
         name: '',
         number: ''
    }
    handleChange = ({currentTarget}) => {
    const { name, value } = currentTarget;
    return this.setState({ [name]: value })
    
    }
 
   handleChangeSubmit = (e) => {
     e.preventDefault();
     const { submit } = this.props;
    submit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };
    render() {
        const { name, number } = this.state;
        return (
        <form onSubmit={this.handleChangeSubmit} className={s.form}>
          <label className={ s.label}>
            Name
          <input type="text" name="name" required value={name} onChange={this.handleChange} className={s.input}></input>
          </label>
          <label  className={  s.label}>
            Number
          <input type="tel" required name="number" value={number} onChange={this.handleChange} className={s.input}></input>
          </label>
          <button type="submit" className={s.button}>Add to card</button>
        </form>
        )
    }
}
FormContacts.propTypes = {
    submit: PropTypes.func.isRequired
}
export default FormContacts;