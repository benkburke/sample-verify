import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const [totalAmount, setTotalAmount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [transactionCount, setTransactionCount] = useState(0);

  useEffect(() => {
    fetch("/api/customers").then(response => {
      response.json().then(data => {
        setCustomerCount(data.length);
      });
    });

    fetch("/api/transactions").then(response => {
      response.json().then(data => {
        setTransactionCount(data.length);

        var total = 0;
        data.forEach((o: any) => {
          total += o.amount;
        });

        console.log("data", data);

        setTotalAmount(total);
      });
    });
  }, []);

  return (
    <>
      <h1>Dashboard</h1>

      <p>
        Read Me:
        <br />
        <br />
        This is a simple verification app.
        <br />
        There are two rulesets in place for Customers and Transactions.
        <br />
        <br />
        Customers: Must be 21 year's of age or older.
        <br />
        Tranasctions: Amount must be between $10 - $10,000.00.
      </p>

      <br />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Transactions Total: <h2>${totalAmount.toFixed(2)}</h2>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Customer Count
            <br />
            <h3>{customerCount}</h3>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Transaction Count
            <br />
            <h3>{transactionCount}</h3>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default connect()(Dashboard);
