import React, { Component } from "react";
import Form from "./Form";
import { addContacts } from "./utils/data";

class AddContact extends Component {
  onSubmit = formValues => {
    addContacts(formValues);
    this.props.history.push("/");
  };
  render() {
    return <Form onSubmit={this.onSubmit} />;
  }
}

export default AddContact;
