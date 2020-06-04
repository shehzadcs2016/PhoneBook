import React, { Component } from "react"
import Form from "./Form"
import { getContact, addContact } from "./utils/data"

class EditForm extends Component {
  state = {
    list: {},
  }
  componentDidMount() {
    this.setState({ list: getContact(this.props.match.params.id) })
  }

  onSubmit = (formValues) => {
    const id = this.props.match.params.id
    addContact(formValues, id)
    this.props.history.push("/")
  }
  render() {
    const { list } = this.state
    console.log(list)
    if (Object.keys(list).length) {
      return <Form list={list} onSubmit={this.onSubmit} />
    }
    return <div>Loading...</div>
  }
}

export default EditForm
