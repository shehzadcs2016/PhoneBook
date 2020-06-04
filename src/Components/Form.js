import React from "react"
// import Button from '@material-ui/core/Button';
import { useStyles } from "./Style"
import { Button, TextField } from "@material-ui/core"

class Form extends React.Component {
  state = {
    name: "",
    contact: "",
    email: "",
    message: "",
    location: "",
  }
  componentDidMount() {
    if (this.props.list) {
      const { name, contact, email, location } = this.props.list
      this.setState({ name, contact, email, location })
    }
  }

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value })

  onSubmit = (e) => {
    // console.log(formValues);

    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    // console.log(this.props)
    const { name, contact, email, message, location } = this.state
    return (
      <form>
        <TextField
          name="name"
          required
          type="text"
          id="standard-basic"
          className={useStyles.textField}
          label="Enter Name"
          margin="normal"
          value={this.state.name}
          onChange={this.handleChange}
          style={{ width: "100%" }}
        />
        <TextField
          name="contact"
          required
          id="standard-basic"
          type="text"
          className={useStyles.textField}
          label="Enter Contact"
          margin="normal"
          style={{ width: "100%" }}
          value={this.state.contact}
          onChange={this.handleChange}
        />
        <TextField
          name="email"
          required
          id="standard-basic"
          type="email"
          className={useStyles.textField}
          label="Enter Email"
          margin="normal"
          style={{ width: "100%" }}
          value={email}
          onChange={this.handleChange}
        />
        <TextField
          name="location"
          required
          id="standard-basic"
          type="text"
          className={useStyles.textField}
          label="Enter location"
          margin="normal"
          style={{ width: "100%" }}
          value={location}
          onChange={this.handleChange}
        />

        <div className="col-md-6 mt-3 ">
          <Button
            size="large"
            fullWidth
            disabled={
              name.length === 0 ||
              email.length === 0 ||
              contact.length === 0 ||
              location.length === 0
            }
            variant="contained"
            color="secondary"
            onClick={this.onSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    )
  }
}

export default Form
