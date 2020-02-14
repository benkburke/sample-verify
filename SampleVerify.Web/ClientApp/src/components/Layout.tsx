import * as React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Icon
} from "@material-ui/core";

const navHeight = "3rem";
const drawerWidth = "12rem";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  appBar: {
    height: navHeight,
    boxShadow: "none"
  },
  appButton: {
    color: "#fff"
  },
  toolbar: {
    minHeight: navHeight
  },
  spacer: {
    flexGrow: 1
  },
  drawer: {
    height: `calc(100% - ${navHeight})`,
    marginTop: navHeight,
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    height: `calc(100% - ${navHeight})`,
    marginTop: navHeight,
    width: drawerWidth
  },
  navLink: {
    textDecoration: "none",
    color: "inherit",
    div: {
        minWidth: "32px"
    }
  },
  main: {
    height: `calc(100% - ${navHeight})`,
    marginTop: navHeight,
    padding: "1rem 1rem 0 1rem",
    width: `calc(100% - ${drawerWidth})`
  }
}));

export default (props: { children?: React.ReactNode }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.navLink}>
            <Button className={classes.appButton}>Sample Verify App</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List component="nav">          
          <Link to="/" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon>
                <Icon>bar_chart</Icon>
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItem>
          </Link>

          <Divider />

          <Link to="/customers" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon>
                <Icon>people</Icon>
              </ListItemIcon>
              <ListItemText>Customers</ListItemText>
            </ListItem>
          </Link>

          <Link to="/transactions" className={classes.navLink}>
            <ListItem button>
              <ListItemIcon>
                <Icon>attach_money</Icon>
              </ListItemIcon>
              <ListItemText>Transactions</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>

      <main className={classes.main}>{props.children}</main>
    </div>
  );
};
