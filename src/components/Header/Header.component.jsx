import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  toolbar: {
    display: 'flex',
  },
  anchor: {
    padding: '15px 0',
  },
});

function Header(props) {
  const { classes } = props;
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <a className={classes.anchor} href="https://www.coworking-toulouse.com/">
          <img src="http://www.coworking-toulouse.com/wp-content/uploads/2015/04/etincelle-coworking-e1428181529836.gif" height="60" alt="etincelle-coworking-logo" />
        </a>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Header);
