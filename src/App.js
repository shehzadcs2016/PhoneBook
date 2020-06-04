import React, { Component } from "react";
import AddContact from "./Components/AddContact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactList from "./Components/contactList";
import EditContact from "./Components/EditContact";
class App extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: 20 }}>
        <Router>
          <Link
            style={{
              border: "1px solid grey",
              margin: 10,
              fontSize: 20,
              padding: 8,
              backgroundColor: "grey",
              color: "white",
              borderRadius: 9
            }}
            to="/"
          >
            Contact List
          </Link>

          <Link
            style={{
              border: "1px solid grey",
              fontSize: 20,
              padding: 8,
              backgroundColor: "grey",
              color: "white",
              borderRadius: 9
            }}
            to="/add"
          >
            Add Contact
          </Link>

          <Switch>
            <Route path="/add" component={AddContact} />
            <Route path="/" exact component={ContactList} />
            <Route path="/edit/:id" exact component={EditContact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
