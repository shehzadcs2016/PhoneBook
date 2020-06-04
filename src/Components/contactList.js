import React, { Component } from "react"
import {
  StyledTableCell,
  StyledTableRow,
  useStyles,
} from "./../Components/Style"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import { Link } from "react-router-dom"
import { contacts } from "./utils/data"

class ContactList extends Component {
  state = {
    list: [],
  }
  componentDidMount() {
    this.setState({ list: contacts })
  }

  handleDelete = (contact) => {
    const list = this.state.list.filter((m) => m.id !== contact.id)
    this.setState({ list: list })
  }

  render() {
    const { list } = this.state
    return (
      <div className="container" style={{ marginTop: 20 }}>
        <center>
          <h1>Contact List</h1>
        </center>

        <Paper className={useStyles.root}>
          <Table className={useStyles.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Location</StyledTableCell>
                <StyledTableCell>Photo</StyledTableCell>

                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((contact) => (
                <StyledTableRow key={contact.id}>
                  <StyledTableCell>{contact.name}</StyledTableCell>
                  <StyledTableCell>{contact.contact}</StyledTableCell>
                  <StyledTableCell>{contact.email}</StyledTableCell>
                  <StyledTableCell>{contact.location}</StyledTableCell>
                  <StyledTableCell>
                    <img
                      src={contact.photo}
                      alt={contact.photo}
                      style={{ height: "40px", width: "40px" }}
                    />
                  </StyledTableCell>

                  <StyledTableCell>
                    <Link
                      to={`/edit/${contact.id}`}
                      color="secondary"
                      aria-label="edit"
                      className={useStyles.fab}
                    >
                      <EditIcon />
                    </Link>
                    <DeleteIcon onClick={() => this.handleDelete(contact)} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}
export default ContactList
