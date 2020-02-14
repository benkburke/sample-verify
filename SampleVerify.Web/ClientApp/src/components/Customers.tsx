import React, { FormEvent, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography
} from "@material-ui/core";

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

const Customers = () => {
  const [customers, setCustomers] = useState();
  const [validationMessage, setValidationMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = () => {
    fetch("/api/customers").then(response => {
      response.json().then(data => {
        setCustomers(data);
      });
    });
  };

  const addNewCustomer = (e: FormEvent) => {
    e.preventDefault();

    const postBody = {
      firstName,
      lastName,
      dateOfBirth
    };

    fetch("/api/customers", {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(postBody)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data === 0) {
          setValidationMessage("Invalid: Customer must be 21 or over");
        } else {
          setValidationMessage("");
          setFirstName("");
          setLastName("");
          setDateOfBirth("");
        }
      })
      .then(() => {
        loadCustomers();
      });
  };

  return (
    <>
      <form onSubmit={addNewCustomer}>
        <Card>
          <CardHeader title="Add New Customer" />
          <CardContent>
            <Typography color="secondary">{validationMessage}</Typography>
            <br />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            &nbsp;&nbsp;
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            &nbsp;&nbsp;
            <input
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={e => setDateOfBirth(e.target.value)}
            />
          </CardContent>
          <CardActions>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </CardActions>
        </Card>
      </form>

      <br />
      <br />

      <Card>
        <CardHeader title="Customer List" />
        <CardContent>
          <List>
            {customers &&
              customers.map((c: Customer) => {
                return (
                  <ListItem key={c.id}>
                    {c.id} &nbsp;&nbsp; {c.firstName} {c.lastName} &nbsp;&nbsp;
                    {new Date(c.dateOfBirth).toLocaleDateString()}
                  </ListItem>
                );
              })}
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default connect()(Customers);
