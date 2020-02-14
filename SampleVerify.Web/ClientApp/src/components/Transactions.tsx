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

interface Transaction {
  id: number;
  amount: number;
}

const Transactions = () => {
  const [transactions, setTransactions] = useState();
  const [validationMessage, setValidationMessage] = useState("");

  const [customerId, setCustomerId] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = () => {
    fetch("/api/transactions").then(response => {
      response.json().then(data => {        
        setTransactions(data);
      });
    });
  };

  const addNewTransaction = (e: FormEvent) => {
    e.preventDefault();

    const postBody = {
      customerId: +customerId,
      amount: +amount
    };

    fetch("/api/transactions", {
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
          setValidationMessage(
            "Invalid: Amount must be between $10.00 - $10,000.00"
          );
        } else {
          setValidationMessage("");
          setCustomerId("");
          setAmount("");
        }
      })
      .then(() => {
        loadTransactions();
      });
  };

  return (
    <>
      <form onSubmit={e => addNewTransaction(e)}>
        <Card>
          <CardHeader title="Add New Transaction" />
          <CardContent>
            <Typography color="secondary">{validationMessage}</Typography>
            <br />
            <input
              type="text"
              name="customerId"
              placeholder="Customer Id"
              value={customerId}
              onChange={e => setCustomerId(e.target.value)}
            />
            &nbsp;&nbsp;
            <input
              type="text"
              name="amount"
              placeholder="0.00"
              value={amount}
              onChange={e => setAmount(e.target.value)}
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
        <CardHeader title="TransactionList" />
        <CardContent>
          <List>
            {transactions &&
              transactions.map((t: Transaction) => {
                return (
                  <ListItem key={t.id}>
                    {t.id} &nbsp; &nbsp; ${t.amount.toFixed(2)}
                  </ListItem>
                );
              })}
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default connect()(Transactions);
